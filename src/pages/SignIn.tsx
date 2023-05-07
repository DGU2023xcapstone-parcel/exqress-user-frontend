import { useNavigate } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";
import SignInTemplate from "@/components/template/signin";
import { useSignIn } from "@/hooks/useSignIn";
import { useSetNavInvisible } from "@/hooks/useSetNavState";

const SignIn = () => {
  const navigate = useNavigate();
  const [signInValue, setSignInValue] = useState({
    id: "",
    password: "",
  });
  const { handleSignIn, data, isError, isSuccess, isLoading } =
    useSignIn(signInValue);

  const handleSignInValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSignInValue({
      ...signInValue,
      [e.target.name]: e.target.value,
    });
  };
  const handlekakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  useSetNavInvisible();
  useEffect(() => {
    if (isLoading) {
      // 이건 나중에 뺄것
      navigate({
        pathname: "/info",
      });
    }
  }, [isLoading]);

  return (
    <SignInTemplate
      id={signInValue.id}
      password={signInValue.password}
      onChange={handleSignInValue}
      onClick={handleSignIn}
      onKakaoLogin={handlekakaoLogin}
    />
  );
};

export default SignIn;
