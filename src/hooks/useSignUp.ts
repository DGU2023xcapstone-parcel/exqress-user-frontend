import { useMutation } from "@tanstack/react-query";
import { signUp } from "@/services/sign";
import { SignUpInputType } from "@/types/sign";

export const useSignUp = (props: SignUpInputType) => {
  const { mutate, data, isLoading, isSuccess, isError } = useMutation(
    ["signup"],
    signUp,
    {
      onSuccess: (res) => {
        console.log(res);
      },
      onError: (error) => {
        console.log(`Use Signin Error: `, error);
      },
    }
  );

  const handleSignUp = () => {
    mutate(props);
  };

  return { handleSignUp, data, isLoading, isSuccess, isError };
};
