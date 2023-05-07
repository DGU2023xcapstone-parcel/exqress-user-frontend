import { InfoType } from "@/types/info";
import * as style from "./InfoContent.style";

interface InfoContentProps {
  info: InfoType;
  onClick: (info: InfoType) => void;
}
const InfoContent = ({ info, onClick }: InfoContentProps) => {
  return (
    <style.Wrapper>
      <div>
        <style.Text isBig={false} isDark>
          {info.date}
        </style.Text>
        <style.Text isBig isDark>
          {info.productName}
        </style.Text>
        <style.Text isBig={false} isDark={false}>
          {info.invoiceNo} {info.sender}
        </style.Text>
        <style.Text isBig={false} isDark>
          {info.company}
        </style.Text>
      </div>
      <style.Button onClick={() => onClick(info)}>상세 정보</style.Button>
    </style.Wrapper>
  );
};

export default InfoContent;
