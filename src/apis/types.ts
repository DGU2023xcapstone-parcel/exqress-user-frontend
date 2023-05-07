/**
 * API 호출로 받을 서버 데이터 interface
 */
export interface ApiSuccess<T> {
  /** HTTP Status Code */
  code: number;
  /**  응답 메세지 */
  msg: string;
  /** 응답 데이터 */
  data?: T;
}

/**
 * API 호출 과정에서 발생한 에러 정보 관련 interface
 */
interface ApiErrorFieldData {
  /** 에러를 발생시킨 field 요소 */
  field: string;
  /** 해당 field에서 발생한 구체적인 에러 원인 */
  msg: string;
}

/**
 * API 호출 과정에서 발생한 에러와 관련된 interface
 */
export interface ApiError {
  /** HTTP Status Code */
  code: number;
  /** 에러 관련 메세지 */
  msg: string;
  /** 에러 관련 데이터 */
  data?: {
    errors: ApiErrorFieldData[];
  };
}

/**
 * API 호출 결과 (성공, 실패) 를 나타내는 type
 * @param T 요청 성공 시 인계 받은 데이터 타입
 */
export type ApiResponse<T> = Promise<
  | { isSuccess: true; result: ApiSuccess<T> }
  | { isSuccess: false; result: ApiError }
>;
