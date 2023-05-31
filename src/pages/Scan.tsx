import ScanTemplate from "@/components/template/scan";
import { useScanQrCode } from "@/hooks/useScanQrCode";
import { useRefreshToken } from "@/hooks/useRefreshToken";

const Scan = () => {
  useRefreshToken();
  const { handleScan, handleError } = useScanQrCode();

  return <ScanTemplate onError={handleError} onScan={handleScan} />;
};

export default Scan;
