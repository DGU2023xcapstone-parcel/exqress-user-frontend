import ListContent from "@/components/pages/scan/list-content/ListContent";
import { ScanResultTemplateProps } from "@/components/template/scan-result/ScanResultTemplate";
import { getDate } from "@/utils/date";
import * as style from "./ResultList.style";

const ResultList = ({
  infoData,
}: Pick<ScanResultTemplateProps, "infoData">) => (
  <style.Wrapper>
    <style.Title>택배정보</style.Title>
    <style.Box>
      <ListContent title={"운송장 번호"} content={infoData.invoiceNo} />
      <ListContent title={"상태"} content={infoData.state} />
      <ListContent title={"상품정보"} content={infoData.productName} />
      <ListContent title={"받는 분"} content={infoData.receiverName} />
      <ListContent title={"배송 기사"} content={infoData.deliveryName} />
      <ListContent title={"회사"} content={infoData.company} />
      <ListContent title={"주소"} content={infoData.address} />
      <ListContent
        title={"날짜"}
        content={
          infoData.createdDate === "" ? "" : getDate(infoData.createdDate)
        }
      />
    </style.Box>
  </style.Wrapper>
);

export default ResultList;
