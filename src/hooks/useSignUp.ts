import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { signUp } from "@/services/sign";
import { SignUpInputType } from "@/types/sign";

export const useSignUp = (props: SignUpInputType) => {
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation(["signup"], signUp, {
    onSuccess: (res) => {
      console.log(res);
    },
    onError: (error) => {
      console.log(`Use Signin Error: `, error);
    },
  });

  const handleSignUp = () => {
    mutate(props);
  };

  useEffect(() => {
    if (isLoading) {
      navigate({
        pathname: "/signin",
      });
    }
  }, [isLoading]);

  return { handleSignUp };
};
