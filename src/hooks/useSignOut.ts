import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { signOut } from "@/services/sign";
import { setAccessToken } from "@/apis/API";

export const useSignOut = () => {
  const navigate = useNavigate();

  const { mutate, isLoading } = useMutation(["signout"], signOut, {
    onSuccess: () => {
      setAccessToken("");
    },
    onError: (error) => {
      console.log(`Use Signin Error: `, error);
    },
  });

  const handleSignOut = () => {
    mutate();
  };

  useEffect(() => {
    if (isLoading) {
      navigate({
        pathname: "/signin",
      });
    }
  }, [isLoading]);

  return { handleSignOut };
};
