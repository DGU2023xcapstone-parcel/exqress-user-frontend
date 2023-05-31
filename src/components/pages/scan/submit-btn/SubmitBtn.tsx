import * as style from "./SubmitBtn.style";

interface DeleteBtnProps {
  text: string;
  onClick: () => void;
}
const SubmitBtn = ({ text, onClick }: DeleteBtnProps) => {
  return <style.Wrapper onClick={onClick}>{text}</style.Wrapper>;
};

export default SubmitBtn;
