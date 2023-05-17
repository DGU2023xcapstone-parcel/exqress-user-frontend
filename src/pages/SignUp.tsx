import { ChangeEvent, useState } from "react";
import { useSignUp } from "@/hooks/useSignUp";
import { SignUpInputType } from "@/types/sign";
import SignUpTemplate from "@/components/template/signup";

const SignUp = () => {
  const [signUpValue, setSignUpValue] = useState<SignUpInputType>({
    id: "",
    password: "",
    name: "",
    company: "",
    phone: "",
    email: "",
  });
  const { handleSignUp } = useSignUp(signUpValue);

  const handleSignupState = (e: ChangeEvent<HTMLInputElement>) => {
    setSignUpValue({
      ...signUpValue,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <SignUpTemplate
      signUpValue={signUpValue}
      onChange={handleSignupState}
      onClick={handleSignUp}
    />
  );
};

export default SignUp;
