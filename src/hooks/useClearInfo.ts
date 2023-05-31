import { useMutation } from "@tanstack/react-query";
import { queryKeys } from "@/react-query/constants";
import { clearInfo } from "@/services/scan";
import { useNavigate } from "react-router-dom";
import useCustomToast from "./useCustomToast";
import { useGetInfoList } from "./useGetInfoList";
import { InfoType } from "../types/info";

/**
 * 스캔 결과값을 받아오는 hooks, 만약 값 있다? 값 반환, 유효하지않은 qr, 니꺼아님
 * @params 스캔한 코드 값
 * @returns info 값
 */
export const useClearInfo = (props: Pick<InfoType, "invoiceNo">) => {
  const navigate = useNavigate();

  const { refetchInfo } = useGetInfoList();
  const { mutate } = useMutation(queryKeys.scan, clearInfo, {
    onSuccess: () => {
      useCustomToast("success", "개인정보가 파기되었습니다.");
      refetchInfo();
      navigate({ pathname: "/" });
    },
  });

  const handleClearInfo = () => {
    mutate(props);
  };
  return { handleClearInfo };
};
