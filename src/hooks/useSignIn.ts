import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "@/services/sign";
import { setAccessToken } from "@/apis/API";
import { SignInInputType } from "@/types/sign";

export const useSignIn = (props: SignInInputType) => {
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation(["signin"], signIn, {
    onSuccess: (res) => {
      setAccessToken(res);
    },
    onError: (error) => {
      console.log(`Use Signin Error: `, error);
    },
  });

  const handleSignIn = () => {
    mutate(props);
  };

  useEffect(() => {
    if (isLoading) {
      // 이건 나중에 뺄것
      navigate({
        pathname: "/info",
      });
    }
  }, [isLoading]);

  return { handleSignIn };
};
