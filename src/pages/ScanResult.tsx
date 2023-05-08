import { useLocation } from "react-router-dom";
import { InfoType } from "@/types/info";
import ScanResultTemplate from "@/components/template/scan-result";

const ScanResult = () => {
  const location = useLocation();
  const info: InfoType = { ...location.state.infoData };

  return (
    <ScanResultTemplate
      infoData={info}
      onClick={() => {
        console.log("파기");
      }}
    />
  );
};

export default ScanResult;
