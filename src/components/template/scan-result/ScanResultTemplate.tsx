import { InfoType } from "@/types/info";

import SubmitBtn from "@/components/pages/scan/submit-btn";
import ResultList from "@/components/pages/scan/result-list";
import * as style from "./ScanResultTemplate.style";

export interface ScanResultTemplateProps {
  infoData: InfoType;
  isSuccess: boolean;
  onHandleClearInfo: () => void;
  onHandleReturnInfo: () => void;
}
const ScanResultTemplate = ({
  infoData,
  isSuccess,
  onHandleClearInfo,
  onHandleReturnInfo,
}: ScanResultTemplateProps) => (
  <style.Wrapper>
    <ResultList infoData={infoData} />
    {isSuccess ? (
      <SubmitBtn onClick={onHandleClearInfo} text="개인정보 파기" />
    ) : (
      <SubmitBtn onClick={onHandleReturnInfo} text="택배 반송" />
    )}
  </style.Wrapper>
);

export default ScanResultTemplate;
