import * as style from "./DeleteBtn.style";

interface DeleteBtnProps {
  onClick: () => void;
}
const DeleteBtn = ({ onClick }: DeleteBtnProps) => {
  return <style.Wrapper onClick={onClick}>개인정보 파기</style.Wrapper>;
};

export default DeleteBtn;
