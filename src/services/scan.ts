import { getFetcher } from "@/apis/API";
import { InfoType } from "@/types/info";

/**
 * scan후 값 받아오는 api
 * @params 스캔한 코드 값
 * @returns info 리스트
 */
export const getScanResult = async (code: string) => {
  const response = await getFetcher<InfoType>("/scan", {
    params: { code: code },
  }).then((res) => {
    if (res.isSuccess && res.result.data) return res.result.data;
  });
  return response;
};