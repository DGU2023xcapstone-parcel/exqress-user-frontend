import QrScanner from "@/components/pages/scan/qr-scanner";
import * as style from "./ScanTemplate.style";

export interface ScanTemplateProps {
  onError: (err: Event) => void;
  onScan: (data: string | null) => void;
}
const ScanTemplate = ({ onError, onScan }: ScanTemplateProps) => (
  <style.Wrapper>
    <QrScanner onError={onError} onScan={onScan} />
  </style.Wrapper>
);

export default ScanTemplate;
