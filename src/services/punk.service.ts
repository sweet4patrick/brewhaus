import { AxiosResponse } from "axios";
import { API_URL } from "../constants";
import BaseAPI from "./base.service";

class PunkAPI extends BaseAPI {
  constructor() {
    super(API_URL ?? "");
  }

  getBeerByPage(page: Number, perPage: Number): Promise<AxiosResponse> {
    return this.get("/beers", { page, per_page: perPage });
  }

  getBeerById(id: string): Promise<AxiosResponse> {
    return this.get(`/beers/${id}`);
  }

  getBeerByName(
    name: string,
    page: Number,
    perPage: Number
  ): Promise<AxiosResponse> {
    return this.get("/beers", { beer_name: name, page, per_page: perPage });
  }
}

const punkAPI = new PunkAPI();
export default punkAPI;
