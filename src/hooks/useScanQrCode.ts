// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { queryKeys } from "@/react-query/constants";
import { scanQrCode } from "@/services/scan";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import useCustomToast from "./useCustomToast";

/**
 * 스캔 결과값을 받아오는 hooks, 만약 값 있다? 값 반환, 유효하지않은 qr, 니꺼아님
 * @params 스캔한 코드 값
 * @returns info 값
 */
export const useScanQrCode = () => {
  const navigate = useNavigate();
  const { data, mutate, isSuccess } = useMutation(queryKeys.scan, scanQrCode, {
    onSuccess: () => {
      useCustomToast("success", "스캔에 성공했습니다.");
    },
  });

  const handleError = (error: any) => {
    console.log(error);
  };
  const handleScan = (data: string | null) => {
    if (data) {
      console.log(data);
      mutate({ qrId: data });
    }
  };

  useEffect(() => {
    if (data && isSuccess) {
      console.log(data);
      navigate("/scan/result", {
        state: {
          infoData: data,
        },
      });
    }
  }, [data, isSuccess]);
  return { handleScan, handleError };
};
