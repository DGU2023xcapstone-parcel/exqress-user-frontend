import axios, { AxiosError, AxiosRequestConfig, isAxiosError } from "axios";

import { API_URL } from "@/constants/url";
import { CommonResponse, CustomAxiosInterface } from "@/types/api";
import { refreshToken } from "@/services/user";

/**
 * accessToken을 axios 헤더에 담는 함수
 * @param token accessToken
 * @param authState 로그인상태 어떻게 할지
 */
export const setAccessToken = (token: string) => {
  authApi.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};

/**
 * axios error 핸들링
 * @param error axios 에러 혹은 알수없는 에러
 * @param error 에러 객체 반환
 */
const onError = async (error: AxiosError) => {
  if (isAxiosError<CommonResponse<null>>(error)) {
    const { status, message } = error.response!.data;
    const originalRequest = error.config as AxiosRequestConfig & {
      _retry?: boolean;
    };

    switch (status) {
      case "400":
        break;
      case "500":
        console.log("500");
        originalRequest._retry = true;
        try {
          refreshToken();
          // 기존 요청을 다시 보내기
          return authApi(originalRequest);
        } catch (refreshError) {
          // 토큰 리프레시 요청이 실패한 경우 로그아웃 또는 오류 처리 등을 수행
          // 예시: localStorage.removeItem('token');
          // 예시: redirect('/login');
          throw refreshError;
        }
      case "409":
        break;
      case "500":
        break;
      default:
        break;
    }
    console.log(`${status}: ${message}`);
  } else {
    // 여긴 그냥 문제
    console.log(`알수 없는 문제${error}`);
  }
  return Promise.reject(error);
};

/** 인가를 확인해햐 하는 api*/
export const authApi: CustomAxiosInterface = axios.create({
  baseURL: API_URL,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

authApi.interceptors.response.use((response) => {
  const { accessToken } = response.data;
  console.log(`Call AUTH API = `, response.data.accessToken);

  if (accessToken) {
    console.log(`SET TOKEN ${accessToken}`);
    setAccessToken(accessToken);
  }

  return response;
}, onError);

/** 인가가 필요없는 api */
export const publicApi: CustomAxiosInterface = axios.create({
  baseURL: API_URL,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
});

publicApi.interceptors.response.use((response) => {
  console.log(`Call PUBLIC API = `, response);
  return response;
}, onError);
