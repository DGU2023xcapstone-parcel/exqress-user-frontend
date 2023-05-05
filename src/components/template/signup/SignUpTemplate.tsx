import { SignUpStateType } from "~/src/pages/SignUp";
import Input from "@/components/common/input";
import * as style from "./SignUpTemplate.style";
import { ChangeEvent } from "react";
import SignupSubmitBtn from "@/components/pages/sign/signup-submit-btn";

export interface SignUpTemplateProps {
  signupState: SignUpStateType;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onClick: () => void;
}
const SignUpTemplate = ({
  signupState,
  onChange,
  onClick,
}: SignUpTemplateProps) => (
  <style.Wrapper>
    <style.Box>
      <style.Text>아이디</style.Text>
      <Input
        value={signupState.id}
        name="id"
        placeHolder=""
        sizeType="Big"
        onChange={onChange}
      />
      <style.Text>비밀번호</style.Text>
      <Input
        value={signupState.password}
        name="password"
        placeHolder="영문, 숫자 조합 8~16자"
        sizeType="Big"
        onChange={onChange}
      />
      <style.Text>이름</style.Text>
      <Input
        value={signupState.name}
        name="name"
        placeHolder=""
        sizeType="Big"
        onChange={onChange}
      />
      <style.Text>택배회사 이름</style.Text>
      <Input
        value={signupState.company}
        name="company"
        placeHolder=""
        sizeType="Big"
        onChange={onChange}
      />
      <style.Text>휴대폰 번호</style.Text>
      <Input
        value={signupState.phone}
        name="phone"
        placeHolder="전화번호 입력"
        sizeType="Big"
        onChange={onChange}
      />
      <style.Text>이메일</style.Text>
      <Input
        value={signupState.email}
        name="email"
        placeHolder="예) abcd@gmail.com"
        sizeType="Big"
        onChange={onChange}
      />
    </style.Box>
    <SignupSubmitBtn onClick={onClick} />
  </style.Wrapper>
);

export default SignUpTemplate;
