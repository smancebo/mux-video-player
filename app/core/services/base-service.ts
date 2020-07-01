import axios, { AxiosRequestConfig } from 'axios';
import Config from 'config';

const Axios = axios.create({});

type AxiosData = any | undefined;
type RequestConfig = AxiosRequestConfig | undefined;

class Service {
  private apiUrl: string;
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.apiUrl = Config.API;
    this.baseUrl = `${this.apiUrl}/${baseUrl}`;
  }

  protected get<T>(path: string, config?: RequestConfig) {
    return Axios.get<T>(`${this.baseUrl}/${path}`, config);
  }

  protected post<T>(path: string, data?: AxiosData, config?: RequestConfig) {
    return Axios.post<T>(`${this.baseUrl}/${path}`, data, config);
  }

  protected delete<T>(path: string, config?: RequestConfig) {
    return Axios.delete<T>(`${this.baseUrl}/${path}`, config);
  }

  protected put<T>(path: string, data?: AxiosData, config?: RequestConfig) {
    return Axios.put<T>(`${this.baseUrl}/${path}`, data, config);
  }
}

export default Service;
