import ProForm, { ProFormCaptcha, ProFormText } from '@ant-design/pro-form';
import React from 'react';
import { loginParams } from '@/service/login.service';
import { loginState } from '@/models/login';
import { Dispatch, connect, Loading } from 'umi';


interface LoginProps {
  dispatch: Dispatch;
  login_info: loginState;
  login?: boolean;
}

const Login: React.FC<LoginProps> = (LoginProps) => {
  console.log(LoginProps,'LoginProps');
  const {dispatch , login_info} = LoginProps
  const handleLogin = (values: loginParams):Promise<void> => {
    return dispatch({
      type: 'login_info/handleLogin',
      payload: {
        phone: values.phone,
        password: values.password,
        code: values.code,
      }
    });
  }
  return (
    <>
     <ProForm
      title='登录'
      onFinish={handleLogin}
    >
      <ProFormText label="手机号" name="phone" />
      <ProFormText.Password label="密码" name="password"/>
      <ProFormText label="验证码" name="code" />
    </ProForm>
    <h2>欢迎回来{login_info.username}</h2>
    </>
  )
}

export default connect(({
  login_info,
  loading
} : {
  login_info: loginState,
  loading: Loading
}) => ({
  login_info,
  login: loading.effects['login_info/handleLogin']
}))(Login)
