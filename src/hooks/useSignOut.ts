import { useSetRecoilState } from "recoil";
import { useMutation } from "@tanstack/react-query";
import { signOut } from "@/services/sign";
import { authState } from "@/recoil/auth";
import { setAccessToken } from "@/apis/API";

export const useSignOut = () => {
  const setAuthAtom = useSetRecoilState(authState);

  const { mutate, data, isLoading, isSuccess, isError } = useMutation(
    ["signout"],
    signOut,
    {
      onSuccess: () => {
        setAccessToken("");
        setAuthAtom(false);
      },
      onError: (error) => {
        console.log(`Use Signin Error: `, error);
      },
    }
  );

  const handleSignOut = () => {
    mutate();
  };

  return { handleSignOut, data, isLoading, isSuccess, isError };
};
