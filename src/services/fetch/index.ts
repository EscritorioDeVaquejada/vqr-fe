import axios from 'axios';

import { Body, Headers, Params } from './types';

class Fetch {
  async get(url: string, headers?: Headers) {
    const response = await axios.get(url, { headers });
    return response;
  }
  async post(url: string, body?: Body, headers?: Headers) {
    const response = await axios.post(url, body, { headers });
    return response;
  }
  async put(url: string, params?: Params) {
    const response = await axios.put(url, params);
    return response;
  }
  async delete(url: string, params?: Params) {
    const response = await axios.delete(url, params);
    return response;
  }
}

export default new Fetch();
