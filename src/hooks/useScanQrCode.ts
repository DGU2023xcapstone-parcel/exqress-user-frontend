import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { useMutation } from "@tanstack/react-query";
import { queryKeys } from "@/react-query/constants";
import { scanQrCode } from "@/services/scan";
import useCustomToast from "./useCustomToast";

/**
 * 스캔 결과값을 받아오는 hooks, 만약 값 있다? 값 반환, 유효하지않은 qr, 니꺼아님
 * @params 스캔한 코드 값
 * @returns info 값
 */
export const useScanQrCode = () => {
  const navigate = useNavigate();

  const [qrId, setQrId] = useState("");
  const { data, mutate, isSuccess } = useMutation(queryKeys.scan, scanQrCode, {
    onSuccess: () => {
      useCustomToast("success", "스캔에 성공했습니다.");
    },
    onError: () => {
      // 서버오류
      if (data?.status === "500") {
        useCustomToast("error", "다시 시도해주세요");
        // 회원 택배 아닌경우
      } else {
        useCustomToast("error", "회원님의 택배가 아닙니다. 반송처리해주세요");
        navigate("/scan/result", {
          state: {
            isSucess: false,
            infoData: {
              invoiceNo: "",
              productName: "",
              receiverName: "",
              state: "",
              address: "",
              deliverName: "",
              company: "",
              createdDate: "",
            },
            qrId: qrId,
          },
        });
      }
    },
  });
  console.log(isSuccess);
  const handleError = (error: any) => {
    console.log(error);
  };
  const handleScan = (data: string | null) => {
    console.log(data);
    if (data) {
      setQrId(data);
      mutate({ qrId: data });
    }
  };

  useEffect(() => {
    if (data?.data && isSuccess) {
      navigate("/scan/result", {
        state: {
          isSucess: true,
          infoData: data.data,
          qrId: qrId,
        },
      });
    }
  }, [data?.data, isSuccess]);

  return { handleScan, handleError };
};
