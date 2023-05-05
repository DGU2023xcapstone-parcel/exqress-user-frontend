import { InfoType } from "@/pages/Info";
import InfoContent from "@/components/pages/info/info-content";
import * as style from "./InfoTemplate.style";

const RADIO_LIST = [
  { text: "전체", inputValue: "all" },
  { text: "배송완료", inputValue: "finish" },
  { text: "배송시작", inputValue: "start" },
];

export interface InfoTemplateProps {
  infoList: InfoType[];
  onClick: () => void;
}
const InfoTemplate = ({ infoList, onClick }: InfoTemplateProps) => {
  return (
    <style.Wrapper>
      <style.TitleBox>
        <style.Title>배송내역</style.Title>
        <style.Line />
      </style.TitleBox>
      <style.InfoBox>
        {infoList.map((info) => (
          <InfoContent
            date={info.date}
            productName={info.productName}
            invoiceNo={info.invoiceNo}
            name={info.name}
            company={info.company}
            onClick={onClick}
          />
        ))}
      </style.InfoBox>
    </style.Wrapper>
  );
};

export default InfoTemplate;
