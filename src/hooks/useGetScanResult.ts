import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { INFO_LIST } from "../mock";
import { ScanType } from "@/types/scan";
import { getScanResult } from "@/services/scan";

/**
 * 스캔 결과값을 받아오는 hooks
 * @params 스캔한 코드 값
 * @returns info 리스트
 */
export const useGetScanResult = (props: ScanType) => {
  const navigate = useNavigate();

  const {
    data = INFO_LIST[0],
    refetch,
    isLoading,
    isSuccess,
    isError,
  } = useQuery(["scanInfo"], () => getScanResult(props), {
    // enabled로 code값이 있을때만 요청하도록
    enabled: !!!props.code,
    onSuccess: (res) => {
      console.log(res);
    },
    onError: (error) => {
      console.log(`Use Signin Error: `, error);
    },
  });

  // todo isSuccess로 바꾸기
  useEffect(() => {
    if (props.code !== "") {
      navigate("/scan/result", {
        state: {
          infoData: data,
        },
      });
    }
  }, [props.code]);

  return { data, refetch, isLoading, isSuccess, isError };
};
