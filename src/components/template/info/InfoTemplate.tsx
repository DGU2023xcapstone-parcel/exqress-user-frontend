import { InfoType } from "@/types/info";
import InfoContent from "@/components/pages/info/info-content";
import * as style from "./InfoTemplate.style";

export interface InfoTemplateProps {
  infoList: InfoType[];
  onClick: (info: InfoType) => void;
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
          <InfoContent info={info} onClick={onClick} key={info.invoiceNo} />
        ))}
      </style.InfoBox>
    </style.Wrapper>
  );
};

export default InfoTemplate;
