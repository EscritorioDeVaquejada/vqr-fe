import axios from "axios";

import { Body, Headers, Params } from "./types";

class Fetch {
  async get(url: string, headers?: Headers) {
    try {
      const response = await axios.get(url, { headers });
      return response;
    } catch (error: any) {
      return error.response;
    }
  }
  async post(url: string, body?: Body, headers?: Headers) {
    try {
      const response = await axios.post(url, body, { headers });
      return response;
    } catch (error: any) {
      return error.response;
    }
  }
  async put(url: string, params?: Params) {
    try {
      const response = await axios.put(url, params);
      return response;
    } catch (error: any) {
      return error.response;
    }
  }
  async delete(url: string, params?: Params) {
    try {
      const response = await axios.delete(url, params);
      return response;
    } catch (error: any) {
      return error.response;
    }
  }
}

export default new Fetch();
