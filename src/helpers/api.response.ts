import { Response,Status } from "https://deno.land/x/oak/mod.ts";

enum StatusCode {
  SUCCESS = '20000',
  FAILURE = '40001'
}

enum TypeErrors {
  TECNICO = 'Tecnico',
  NOTFOUND = 'Not Found',
  INTERNAL_ERROR = 'Internal error',
  BAD_REQUEST = 'Bad request'
}

export const SuccessResponse = (res:Response,msg = 'OK', data: any = undefined):Response => {
  const body = {
    message: msg,
    StatusCode: StatusCode.SUCCESS
  }
  if (data !== undefined) Object.assign(body, { data })
  res.body = body
  return res
}

export const BadRequestError = (res: Response, message: string = TypeErrors.BAD_REQUEST): Response => {
  return responseError(StatusCode.FAILURE, message, Status.BadRequest, res)
}

export const InternalError = (res: Response): Response => {
  return responseError(StatusCode.FAILURE, TypeErrors.INTERNAL_ERROR, Status.InternalServerError, res)
}

export const NotFoundError = (res: Response): Response => {
  return responseError(StatusCode.FAILURE, TypeErrors.NOTFOUND, Status.NotFound, res)
}

export const responseError = (code: string, type: string,statusCode:number, res: Response) :Response=> {
  res.body = {
    statusCode: code,
    message: type
  }
  res.status =statusCode
  return res
}
