import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { API_URL } from "@/constants/url";
import { ApiError, ApiResponse, ApiSuccess } from "./types";

/**
 * API 요청시 사용할 Axios Instance
 * baseURL, responseType, headers 공통요소로 적용
 * cors위해 withCredential 설정
 */
const API = axios.create({
  baseURL: API_URL,
  responseType: "json",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

/**
 * API 통신 과정에서 발생한 에러를 클라이언트에 객체로 인계하는 함수
 * @param err API 통신 과정에서 발생한 에러 데이터
 * @returns 클라이언트에게 인계할 에러 객체 (ApiError)
 */
function handleApiError(err: unknown): ApiError {
  // AxiosError인 경우
  if (axios.isAxiosError(err)) {
    // 요청을 전송하여 서버에서 응답을 받았으나, 에러가 발생한 경우
    if (err.response) {
      // 서버의 Error Response 의 body를 참고하여 데이터 추가.
      const { data: errResponse }: AxiosResponse<ApiError, any> = err.response;
      return {
        code: errResponse.code,
        msg: errResponse.msg,
        data: errResponse.data ?? undefined,
      };
    }
    // 요청을 전송하였으나 서버에서 응답을 받지 못한 경우
    if (err.request) {
      return {
        code: -1,
        msg: "서버와의 통신 과정에서 문제가 발생했습니다.",
      };
    }
  }
  // axios 오류가 아닌 다른 케이스의 오류일 경우
  return {
    code: 0,
    msg: "원인 미상의 오류가 발생했습니다.",
  };
}

/**
 * GET 요청을 처리하는 유틸 API 함수 getAsync
 * @param T 요청 결과로 받을 데이터의 타입
 *
 * @param url API 요청을 보낼 url (string)
 * @param config API 요청과 관련된 config (AxiosRequestConfig)
 * @returns API 요청 성공과 실패에 따른 객체 (APIResponse)
 */
export async function getFetcher<T>(
  url: string,
  config?: AxiosRequestConfig
): ApiResponse<T> {
  try {
    const response = await API.get<T, AxiosResponse<ApiSuccess<T>, any>, any>(
      url,
      {
        ...config,
      }
    );
    return { isSuccess: true, result: response.data };
  } catch (err) {
    return { isSuccess: false, result: handleApiError(err) };
  }
}

/**
 * POST 요청을 처리하는 유틸 API 함수 postAsync
 * @param T 요청 결과로 받을 데이터의 타입
 * @param D API 요청 시 서버에 전송할 데이터의 타입
 *
 * @param url API 요청을 보낼 url (string)
 * @param data API 요청과 함께 동봉할 data
 * @param config API 요청과 관련된 config (AxiosRequestConfig)
 * @returns API 요청 성공과 실패에 따른 객체 (ApiResponse)
 */
export async function postFetcher<T, D>(
  url: string,
  data?: D,
  config?: AxiosRequestConfig
): ApiResponse<T> {
  try {
    const response = await API.post<T, AxiosResponse<ApiSuccess<T>, D>, D>(
      url,
      data,
      {
        ...config,
      }
    );
    return { isSuccess: true, result: response.data };
  } catch (err) {
    return { isSuccess: false, result: handleApiError(err) };
  }
}

/**
 * accessToken을 axios 헤더에 담는 함수
 * @param token accessToken
 */
export const setAccessToken = (token: string) => {
  API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
};