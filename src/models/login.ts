import { handleLogin, loginParams, getUserInfo } from '../service/login.service';
import { Effect, ImmerReducer, history, Subscription } from 'umi';

export interface loginState {
    username: string,
    userId: string
}

interface loginModelType {
  namespace: 'login_info';
  state: loginState;
  effects: {
    handleLogin: Effect
  };
  reducers: {
    updateInfo: ImmerReducer<loginModelType>
  }
}

interface loginResponseProps {
  code: number;
  token: string;
  data?: {
    name: string;
    userid: string
  }
}

interface updateInfoParams {
  type: string;
  payload: {
    username: string;
    userId: string
  }
}

 const loginModel: loginModelType = {
   namespace: 'login_info',
   state: {
    username: '',
    userId: ''
   },
   effects: {
     *handleLogin(payload, {call, put}) {
        const res: loginResponseProps = yield call(handleLogin, payload.payload)
        if(res.code === 0) {
          localStorage.setItem('token', res.token)
          const user_info = yield call(getUserInfo, {token: res.token})
          console.log('user',user_info.data.name);
          yield put({
            type: 'updateInfo',
            payload: {
              username: user_info?.data?.name,
              userId: user_info?.data?.userId
            }
          })
          history.push('/graphin')
        }else {
          alert('账号密码错误')
        }

        console.log('res',res);
     },
   },
   reducers: {
    updateInfo(state, {payload}) {
      return {
        ...state,
        ...payload
      }
    }
   }
 }

 export default loginModel
