import { useQuery } from "@tanstack/react-query";
// import { InfoType } from "@/types/info";
import { getInfoList } from "@/services/info";
import { INFO_LIST } from "../mock";

// todo fallback으로 바꾸기
// const fallback: InfoType[] = [];
export const useGetInfoList = () => {
  const {
    data = INFO_LIST,
    isLoading,
    isSuccess,
    isError,
  } = useQuery(["info"], getInfoList, {
    onSuccess: (res) => {
      console.log(res);
    },
    onError: (error) => {
      console.log(`Use Signin Error: `, error);
    },
  });

  return { data, isLoading, isSuccess, isError };
};
