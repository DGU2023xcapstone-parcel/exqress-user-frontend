import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import { queryKeys } from "@/react-query/constants";
import { clearInfo } from "@/services/scan";
import { InfoType } from "@/types/info";
import useCustomToast from "./useCustomToast";
import { useGetInfoList } from "./useGetInfoList";

/**
 * 개인정보 파기하는 hook
 * @params 운송장 번호
 * @returns 핸들러
 */
export const useClearInfo = (props: Pick<InfoType, "invoiceNo">) => {
  const navigate = useNavigate();

  const { refetchInfo } = useGetInfoList();
  const { mutate } = useMutation(queryKeys.info, clearInfo, {
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
