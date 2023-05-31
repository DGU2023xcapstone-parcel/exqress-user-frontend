import { ScanType } from "@/types/scan";
import { postAuthApi } from "@/apis/authApi";
import { InfoType } from "@/types/info";

/**
 * scan후 택배 정보 보는 api
 * @params 스캔한 코드 값
 * @returns 택배 정보
 */
export const scanQrCode = async (props: ScanType) => {
  const response = await postAuthApi<InfoType, ScanType>("/scan", props);

  return response;
};

export const clearInfo = async (props: Pick<InfoType, "invoiceNo">) => {
  const response = await postAuthApi<null, Pick<InfoType, "invoiceNo">>(
    "/clear",
    props
  );

  return response;
};

export const returnInfo = async (props: ScanType) => {
  const response = await postAuthApi<null, ScanType>("/return", props);

  return response;
};
