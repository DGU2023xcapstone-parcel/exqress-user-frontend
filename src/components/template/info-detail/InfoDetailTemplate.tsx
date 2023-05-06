import { resultType } from "@/types/types";
import ResultList from "@/components/pages/scan/result-list";
import InfoDetailHead from "@/components/pages/info/info-detail-head";
import * as style from "./InfoDetailTemplate.style";

export interface ScanResultTemplateProps {
  resultList: resultType;
}
const InfoDetailTemplate = ({ resultList }: ScanResultTemplateProps) => (
  <style.Wrapper>
    <InfoDetailHead state={"start"} />
    <ResultList resultList={resultList} />
  </style.Wrapper>
);

export default InfoDetailTemplate;
