import { ChangeEvent } from "react";
import MainLogo from "@/assets/mainLogo.svg";
import Input from "@/components/common/input";
import KakaoImg from "@/assets/kakao.png";
import NaverBtn from "@/components/pages/sign/naver-btn";
import GoogleBtn from "@/components/pages/sign/google-btn";
import SubmitBtn from "@/components/pages/sign/submit-btn";
import SignupBtn from "@/components/pages/sign/signup-btn";
import * as style from "./SignInTemplate.style";

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
    <SignupBtn />
    간편 로그인
    <style.BtnBox>
      <style.Img src={KakaoImg} onClick={onKakaoLogin} />
      <NaverBtn />
      <GoogleBtn />
    </style.BtnBox>
  </style.Wrapper>
);

export default SignInTemplate;
