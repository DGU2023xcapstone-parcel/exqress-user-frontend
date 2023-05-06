import { resultType } from "@/types/types";
import ResultList from "@/components/pages/scan/result-list";
import DeleteBtn from "@/components/pages/scan/delete-btn";
import * as style from "./ScanResultTemplate.style";

export interface ScanResultTemplateProps {
  resultList: resultType;
  onClick: () => void;
}
const ScanResultTemplate = ({
  resultList,
  onClick,
}: ScanResultTemplateProps) => (
  <style.Wrapper>
    <ResultList resultList={resultList} />
    <DeleteBtn onClick={onClick} />
  </style.Wrapper>
);

export default ScanResultTemplate;
