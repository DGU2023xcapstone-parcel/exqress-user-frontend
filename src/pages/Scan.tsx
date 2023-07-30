import ScanTemplate from "@/components/template/scan";
import { useScanQrCode } from "@/hooks/useScanQrCode";

const Scan = () => {
  const { handleScan, handleError } = useScanQrCode();

  return <ScanTemplate onError={handleError} onScan={handleScan} />;
};

export default Scan;
