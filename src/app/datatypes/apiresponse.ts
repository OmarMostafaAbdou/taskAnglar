export interface IApiResult<T> {
  data: T;
  success: boolean;
  message: string;
  status: number;
}
