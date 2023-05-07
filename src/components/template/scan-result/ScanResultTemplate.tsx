import { InfoType } from "@/types/info";
import DeleteBtn from "@/components/pages/scan/delete-btn";
import ResultList from "@/components/pages/scan/result-list";
import * as style from "./ScanResultTemplate.style";

export interface ScanResultTemplateProps {
  infoData: InfoType;
  onClick: () => void;
}
const ScanResultTemplate = ({ infoData, onClick }: ScanResultTemplateProps) => (
  <style.Wrapper>
    <ResultList infoData={infoData} />
    <DeleteBtn onClick={onClick} />
  </style.Wrapper>
);

export default ScanResultTemplate;
