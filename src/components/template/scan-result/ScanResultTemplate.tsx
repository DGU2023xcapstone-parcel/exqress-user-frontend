import ResultList from "@/components/pages/scan/result-list";
import { resultType } from "@/types/types";
import * as style from "./ScanResultTemplate.style";
import DeleteBtn from "../../pages/scan/delete-btn";

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
