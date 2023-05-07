import { useQuery } from "@tanstack/react-query";
// import { InfoType } from "@/types/info";
import { INFO_LIST } from "../mock";
import { getScanResult } from "@/services/scan";

// todo fallback으로 바꾸기
// const fallback: InfoType = {
//   date: "",
//   productName: "",
//   invoiceNo: "",
//   sender: "",
//   receiver: "",
//   deliver: "",
//   state: "",
//   company: "",
// };
export const useGetScanResult = (code: string) => {
  const {
    data = INFO_LIST[0],
    refetch,
    isLoading,
    isSuccess,
    isError,
  } = useQuery(
    ["info"],
    async () => {
      const res = await getScanResult(code);
      return res;
    },
    {
      enabled: false,
      onSuccess: (res) => {
        console.log(res);
      },
      onError: (error) => {
        console.log(`Use Signin Error: `, error);
      },
    }
  );

  return { data, refetch, isLoading, isSuccess, isError };
};
