import { useSetRecoilState } from "recoil";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "@/services/sign";
import { authState } from "@/recoil/auth";
import { setAccessToken } from "@/apis/API";
import { SignInInputType } from "@/types/sign";

export const useSignIn = (props: SignInInputType) => {
  const setAuthAtom = useSetRecoilState(authState);

  const { mutate, data, isLoading, isSuccess, isError } = useMutation(
    ["signin"],
    signIn,
    {
      onSuccess: (res) => {
        setAccessToken(res);
        setAuthAtom(true);
      },
      onError: (error) => {
        console.log(`Use Signin Error: `, error);
      },
    }
  );

  const handleSignIn = () => {
    mutate(props);
  };

  return { handleSignIn, data, isLoading, isSuccess, isError };
};
