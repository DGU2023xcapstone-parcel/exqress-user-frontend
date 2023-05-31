import * as style from "./InfoDetailHead.style";
import Truck from "@/assets/truck.svg";

interface InfoDetailHeadProps {
  state: string;
}
const InfoDetailHead = ({ state }: InfoDetailHeadProps) => {
  return (
    <style.Wrapper>
      <style.Box>
        <style.State>
          {state === "ready" ? <style.Icon src={Truck} /> : <style.Sqare />}
        </style.State>
        배송 준비
      </style.Box>
      <style.Box>
        <style.State>
          {state === "start" ? <style.Icon src={Truck} /> : <style.Sqare />}
        </style.State>
        배송 시작
      </style.Box>
      <style.Box>
        <style.State>
          {state === "complete" ? <style.Icon src={Truck} /> : <style.Sqare />}
        </style.State>
        배송 완료
      </style.Box>
    </style.Wrapper>
  );
};

export default InfoDetailHead;
