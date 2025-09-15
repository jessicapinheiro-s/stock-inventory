import { type Request } from 'express';

export type ReqType = Request<
    Record<string, any>, // params
    any,                //  response body
    Record<string, any>, // request body
    Record<string, any> //  query
>
