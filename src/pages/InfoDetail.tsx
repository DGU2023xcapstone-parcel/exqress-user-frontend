import { useLocation } from "react-router-dom";

import { InfoType } from "@/types/info";
import InfoDetailTemplate from "@/components/template/info-detail";

const InfoDetail = () => {
  const location = useLocation();
  const info: InfoType = { ...location.state.infoData };

  return <InfoDetailTemplate infoData={info} />;
};

export default InfoDetail;
