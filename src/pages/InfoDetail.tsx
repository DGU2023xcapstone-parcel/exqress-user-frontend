import InfoDetailTemplate from "@/components/template/info-detail";
import { resultType } from "@/types/types";

const MOCKLIST: resultType = {
  id: "482299",
  company: "CJ 대한통운",
  info: "데일리 트레이닝",
  sender: "이규호",
  receiver: "김재한",
  deliver: "신현식",
};
const InfoDetail = () => {
  return <InfoDetailTemplate resultList={MOCKLIST} />;
};

export default InfoDetail;
