import { getFetcher } from "@/apis/API";
import { InfoType } from "@/types/info";

/**
 * infoList 받아오는 api
 * @returns info 리스트
 */
export const getInfoList = async () => {
  const response = await getFetcher<InfoType[]>("/info").then((res) => {
    if (res.isSuccess && res.result.data) {
      return res.result.data;
    }
    return [];
  });
  return response;
};
