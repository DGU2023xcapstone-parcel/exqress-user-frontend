import { ChangeEvent, useState } from "react";
import SignInTemplate from "@/components/template/signin";

const SignIn = () => {
  const [signInValue, setSignInValue] = useState({
    id: "",
    password: "",
  });

  const handleSignInValue = (e: ChangeEvent<HTMLInputElement>) => {
    setSignInValue({
      ...signInValue,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = () => {
    console.log("로그인");
  };
  const REST_API_KEY = "2b15fd82639d4abfe6c447dcd536e437";
  const REDIRECT_URI = "http://localhost:5173/signin/kakao";
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const handlekakaoLogin = () => {
    window.location.href = KAKAO_AUTH_URL;
  };

  return (
    <SignInTemplate
      id={signInValue.id}
      password={signInValue.password}
      onChange={handleSignInValue}
      onClick={handleSubmit}
      onKakaoLogin={handlekakaoLogin}
    />
  );
};

export default SignIn;
