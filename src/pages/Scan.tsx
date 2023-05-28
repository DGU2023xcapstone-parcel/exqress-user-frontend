import { useState } from "react";

import ScanTemplate from "@/components/template/scan";
import { useGetScanResult } from "@/hooks/useScanQrCode";

const Scan = () => {
  const [result, setResult] = useState("");
  useGetScanResult({ qrId: result });

  const handleError = (error: any) => {
    console.log(error);
  };
  const handleScan = (data: string | null) => {
    if (data) {
      setResult(data);
    }
  };

  return (
    <ScanTemplate onError={handleError} onScan={handleScan} result={result} />
  );
};

export default Scan;
