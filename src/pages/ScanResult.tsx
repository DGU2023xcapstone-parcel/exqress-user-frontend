import { useLocation } from "react-router-dom";
import ScanResultTemplate from "@/components/template/scan-result";
import { useSetNavVisible } from "@/hooks/useSetNavState";
import { InfoType } from "@/types/info";

const ScanResult = () => {
  const location = useLocation();
  const info: InfoType = { ...location.state.infoData };

  useSetNavVisible();

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
