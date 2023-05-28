import { InfoType } from "@/types/info";
import ResultList from "@/components/pages/scan/result-list";
import InfoDetailHead from "@/components/pages/info/info-detail-head";
import * as style from "./InfoDetailTemplate.style";

export interface ScanResultTemplateProps {
  infoData: InfoType;
}
const InfoDetailTemplate = ({ infoData }: ScanResultTemplateProps) => (
  <style.Wrapper>
    <InfoDetailHead state={infoData.isComplete} />
    <ResultList infoData={infoData} />
  </style.Wrapper>
);

export default InfoDetailTemplate;
