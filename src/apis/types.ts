import {
  AxiosInstance,
  AxiosInterceptorManager,
  AxiosRequestConfig,
  AxiosResponse,
} from "axios";

export interface CommonResponse<T> {
  status: number;
  message: string;
  data: T;
  token: string;
}

export interface CustomAxiosInterface extends AxiosInstance {
  interceptors: {
    request: AxiosInterceptorManager<AxiosRequestConfig>;
    response: AxiosInterceptorManager<AxiosResponse<CommonResponse<any>>>;
  };

  get<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
  post<T, D>(url: string, data?: D, config?: AxiosRequestConfig): Promise<T>;
}
