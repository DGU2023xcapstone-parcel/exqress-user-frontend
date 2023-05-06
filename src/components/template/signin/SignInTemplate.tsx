import { ChangeEvent } from "react";
import Input from "@/components/common/input";
import MainLogo from "@/assets/mainLogo.svg";
import SubmitBtn from "@/components/pages/sign/submit-btn";
import SignupBtn from "@/components/pages/sign/signup-btn";
import Kakao from "@/assets/kakao.svg";
import Naver from "@/assets/naver.svg";
import * as style from "./SignInTemplate.style";
import GoogleBtn from "@/components/pages/sign/google-btn";
import NaverBtn from "../../pages/sign/naver-btn/NaverBtn";

export interface SignInTemplateProps {
  id: string;
  password: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
  onKakaoLogin: () => void;
}
const SignInTemplate = ({
  id,
  password,
  onChange,
  onClick,
  onKakaoLogin,
}: SignInTemplateProps) => (
  <style.Wrapper>
    <img src={MainLogo} />
    <style.Box>
      <style.Inner>
        <Input
          value={id}
          name="id"
          placeHolder="아이디"
          sizeType="Big"
          onChange={onChange}
        />
        <Input
          value={password}
          name="password"
          placeHolder="비밀번호"
          sizeType="Big"
          onChange={onChange}
        />
      </style.Inner>
      <SubmitBtn text={"로그인"} onClick={onClick} />
    </style.Box>
    <style.BtnBox>
      <SignupBtn />
      <style.Img src={Kakao} onClick={onKakaoLogin} />
      <GoogleBtn />
      <NaverBtn />
    </style.BtnBox>
  </style.Wrapper>
);

export default SignInTemplate;
