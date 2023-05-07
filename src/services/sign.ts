import {
  SignInInputType,
  SignInOutputType,
  SignUpInputType,
} from "@/types/sign";
import { postFetcher } from "@/apis/API";

/**
 * 회원가입
 * @param id 아이디
 * @param password 비밀번호
 * @param name 이름
 * @param company 택배 회사
 * @param phone 핸드폰
 * @param email 이메일
 * @returns 가입 성공 시 success, 실패 시 에러 반환 (1001, 500 등)
 */
export const signUp = async (props: SignUpInputType) => {
  const response = await postFetcher<undefined, SignUpInputType>("/signup", {
    ...props,
  }).then((res) => {
    if (res.isSuccess) return "success";
    return "error";
  });
  return response;
};

/**
 * 로그인
 * @param id 아이디
 * @param password 비밀번호
 * @returns 성공 시 JWT 액세스 토큰 인계, 실패 시 에러 객체 반환
 */
export const signIn = async (props: SignInInputType) => {
  const response = await postFetcher<SignInOutputType, SignInInputType>(
    "/signin",
    { ...props }
  ).then((res) => {
    // api호출 성공
    if (res.isSuccess) {
      // 값 있으면 token 추출
      if (res.result.data) {
        const { token } = res.result.data;
        return token;
      }
    }
    return "";
  });
  return response;
};

/**
 * 로그아웃
 * @returns 성공 시 header 비움
 */
export const signOut = async () => {
  const response = await postFetcher<undefined, undefined>("/signout").then(
    (res) => {
      // api호출 성공
      if (res.isSuccess) return "success";
      return "error";
    }
  );
  return response;
};
