import { request } from "umi";

export interface loginParams {
  phone?: String;
  password?: String;
  code?: String;
  token?: string;
}

/**
* 处理登录
* post
* @param params
*/
export const handleLogin = (params: loginParams) => {
  console.log('params',params);
  return request('/api/login',{
    method: 'POST',
    params: params
  })
}

/**
* 通过token查询用户资料
* get
* @param token
*/
export const getUserInfo = ({token}: {token: string}) => {
  console.log('params',token);

  return request('/api/user_info',{
    method: 'GET',
    headers: {"token": token}
  })
}
