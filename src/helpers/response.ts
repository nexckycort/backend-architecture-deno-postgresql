export const response = (code: number, message: string, body?: any) => {
  let resp: any = {
    message,
    code,
  };
  if (typeof body !== "undefined") {
    resp = Object.assign(resp, { data: body });
  }

  return resp;
};
