import { handleLogin, loginParams, getUserInfo } from '../service/login.service';
import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';

export interface loginState {
    username: string,
    userId: string
}

interface responseParam {
  code: string;
  message: string
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

 const loginModel: loginModelType = {
   namespace: 'login_info',
   state: {
    username: '',
    userId: ''
   },
   effects: {
     *handleLogin({payload}: {payload: loginParams}, {call, put}: {call: (func:any, payload) => {}, put: any}):Generator {
        const res = yield call(handleLogin, payload)
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
          alert('hello',user_info.data.name)
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
