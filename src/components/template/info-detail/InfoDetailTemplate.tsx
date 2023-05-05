import ResultList from "@/components/pages/scan/result-list";
import { resultType } from "@/types/types";
import * as style from "./InfoDetailTemplate.style";
import InfoDetailHead from "../../pages/info/info-detail-head";

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
