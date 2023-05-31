import { useLocation } from "react-router-dom";
import { InfoType } from "@/types/info";
import ScanResultTemplate from "@/components/template/scan-result";
import { useRefreshToken } from "@/hooks/useRefreshToken";
import { useClearInfo } from "../hooks/useClearInfo";

const ScanResult = () => {
  useRefreshToken();
  const location = useLocation();
  const info: InfoType = { ...location.state.infoData };

  const { handleClearInfo } = useClearInfo({ invoiceNo: info.invoiceNo });
  return <ScanResultTemplate infoData={info} onClick={handleClearInfo} />;
};

export default ScanResult;
