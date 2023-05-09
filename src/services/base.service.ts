import axios, { AxiosInstance, AxiosResponse } from "axios";
class BaseAPI {
  api: AxiosInstance;

  constructor(baseURL: string) {
    this.api = axios.create({ baseURL });
  }

  public async get(
    url: string,
    params: Object = {},
    headers = {}
  ): Promise<AxiosResponse> {
    return this.api.get(url, { params, headers });
  }

  public async post(
    url: string,
    data: Object,
    headers = {}
  ): Promise<AxiosResponse> {
    return this.api.post(url, data, { headers });
  }

  public async put(
    url: string,
    data: Object,
    headers = {}
  ): Promise<AxiosResponse> {
    return this.api.put(url, data, { headers });
  }

  public async patch(
    url: string,
    data: Object,
    headers = {}
  ): Promise<AxiosResponse> {
    return this.api.patch(url, data, { headers });
  }
}

export default BaseAPI;
