import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";

import { queryKeys } from "@/react-query/constants";
import { returnInfo } from "@/services/scan";
import { ScanType } from "@/types/scan";
import useCustomToast from "./useCustomToast";

/**
 * 택배 반송하는 hook
 * @params qrId
 * @returns 핸들러
 */
export const useReturnInfo = (props: ScanType) => {
  const navigate = useNavigate();

  const { mutate } = useMutation(queryKeys.info, returnInfo, {
    onSuccess: () => {
      useCustomToast("success", "반송처리 되었습니다.");
      navigate({ pathname: "/info" });
    },
  });

  const handleReturnInfo = () => {
    mutate(props);
  };

  return { handleReturnInfo };
};
