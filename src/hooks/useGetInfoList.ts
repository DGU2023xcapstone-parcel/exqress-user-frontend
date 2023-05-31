import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { useQuery } from "@tanstack/react-query";

import { getInfoList } from "@/services/info";
import { queryKeys } from "@/react-query/constants";
import { CustomAxiosErrorType } from "@/types/api";
import { authState } from "@/recoil/auth";
import useCustomToast from "./useCustomToast";

/**
 * 현재 로그인한 사용자 택배 리스트 불러오는 hook
 * @returns info 리스트, 리스트 다시 불러오기
 */
export const useGetInfoList = () => {
  const [isAuth] = useRecoilState(authState);

  const { data = [], refetch } = useQuery(queryKeys.info, getInfoList, {
    enabled: false,
    onError: (error: CustomAxiosErrorType) => {
      useCustomToast("error", error.response?.data.message);
    },
    onSuccess() {
      useCustomToast("success", "정보를 불러왔습니다!");
    },
  });

  useEffect(() => {
    if (isAuth) refetch();
  }, [isAuth]);

  return {
    data,
    refetchInfo: refetch,
  };
};
