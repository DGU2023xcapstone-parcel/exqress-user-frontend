import { ChangeEvent, useState } from "react";
import { useSignIn } from "@/hooks/useSignIn";
import { SignInInputType } from "@/types/sign";
import { KAKAO_AUTH_URL } from "@/constants/oAuth";
import SignInTemplate from "@/components/template/signin";

const SignIn = () => {
  const [signInValue, setSignInValue] = useState<SignInInputType>({
    id: "",
    password: "",
  });
  const { handleSignIn } = useSignIn();

  const handleSignInValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSignInValue({
      ...signInValue,
      [e.target.name]: e.target.value,
    });
  };
  const handlekakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <SignInTemplate
      id={signInValue.id}
      password={signInValue.password}
      onChange={handleSignInValue}
      onClick={() => handleSignIn(signInValue)}
      onKakaoLogin={handlekakaoLogin}
    />
  );
};

export default SignIn;
