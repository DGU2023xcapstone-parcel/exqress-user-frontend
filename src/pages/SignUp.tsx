import { useNavigate } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";
import { useSignUp } from "@/hooks/useSignUp";
import { SignUpInputType } from "@/types/sign";
import SignUpTemplate from "@/components/template/signup";
import { useSetNavInvisible } from "@/hooks/useSetNavState";

const SignUp = () => {
  const navigate = useNavigate();
  const [signupValue, setSignupValue] = useState<SignUpInputType>({
    id: "",
    password: "",
    name: "",
    company: "",
    phone: "",
    email: "",
  });
  const { handleSignUp, data, isSuccess } = useSignUp(signupValue);

  const handleSignupState = (e: ChangeEvent<HTMLInputElement>) => {
    setSignupValue({
      ...signupValue,
      [e.target.name]: e.target.value,
    });
  };

  useSetNavInvisible();
  useEffect(() => {
    if (isSuccess) {
      navigate({
        pathname: "/signin",
      });
    }
  }, [isSuccess]);

  return (
    <SignUpTemplate
      signupState={signupValue}
      onChange={handleSignupState}
      onClick={handleSignUp}
    />
  );
};

export default SignUp;
