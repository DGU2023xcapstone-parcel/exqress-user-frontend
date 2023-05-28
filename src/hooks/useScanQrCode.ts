// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ScanType } from "@/types/scan";
import { queryKeys } from "@/react-query/constants";
import { scanQrCode } from "@/services/scan";

/**
 * 스캔 결과값을 받아오는 hooks, 만약 값 있다? 값 반환, 유효하지않은 qr, 니꺼아님
 * @params 스캔한 코드 값
 * @returns info 값
 */
export const useGetScanResult = (props: ScanType) => {
  // const navigate = useNavigate();
  const {
    data = [],
    // refetch,
    // isLoading,
    // isSuccess,
    // isError,
  } = useQuery(queryKeys.scan, () => scanQrCode(props), {
    // enabled로 code값이 있을때만 요청하도록
    enabled: !!props.qrId,
  });

  // todo isLoading -> isSuccess
  // useEffect(() => {
  //   console.log(!!props.code);
  //   if (isLoading && !!props.code) {
  //     navigate("/scan/result", {
  //       state: {
  //         infoData: data,
  //       },
  //     });
  //   }
  // }, [isLoading, props.code]);

  return { data };
};
