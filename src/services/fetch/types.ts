import { AxiosRequestHeaders } from 'axios';

export type Headers = AxiosRequestHeaders | { [key: string]: any };

export type Body = { [key: string]: any };

export type Params = Body;
