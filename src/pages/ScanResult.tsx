import { useLocation } from "react-router-dom";

import ScanResultTemplate from "@/components/template/scan-result";
import { useClearInfo } from "@/hooks/useClearInfo";
import { useReturnInfo } from "@/hooks/useReturnInfo";
import { useRefreshToken } from "@/hooks/useRefreshToken";
import { ScanResultType } from "@/types/scan";

const ScanResult = () => {
  useRefreshToken();

  const location = useLocation();

  const info: ScanResultType = { ...location.state };

  const { handleClearInfo } = useClearInfo({
    invoiceNo: info.infoData.invoiceNo,
  });
  const { handleReturnInfo } = useReturnInfo({ qrId: info.qrId });

  return (
    <ScanResultTemplate
      infoData={info.infoData}
      isSuccess={info.isSuccess}
      onHandleClearInfo={handleClearInfo}
      onHandleReturnInfo={handleReturnInfo}
    />
  );
};

export default ScanResult;
