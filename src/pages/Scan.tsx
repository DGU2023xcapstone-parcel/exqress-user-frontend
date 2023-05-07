import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ScanTemplate from "@/components/template/scan";
import { useSetNavVisible } from "@/hooks/useSetNavState";
import { useGetScanResult } from "@/hooks/useGetScanResult";

const Scan = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState("");
  const [error, setError] = useState(null);
  const { data, isSuccess, refetch, isLoading } = useGetScanResult(result);

  const handleError = (error: any) => {
    setError(error.message);
  };
  const handleScan = (data: string | null) => {
    if (data) {
      setResult(data);
      refetch();
    }
  };

  useSetNavVisible();
  useEffect(() => {
    // todo isSuccess로 바꿔야함
    if (result !== "") {
      navigate("/scan/result", {
        state: {
          infoData: data,
        },
      });
    }
  }, [result, isLoading]);

  return (
    <ScanTemplate onError={handleError} onScan={handleScan} result={result} />
  );
};

export default Scan;
