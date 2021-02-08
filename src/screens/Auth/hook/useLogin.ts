import {RootState} from '@redux/reducers';
import {login} from '@screens/Auth/redux/actions';
import {useDispatch, useSelector} from 'react-redux';
import {LoginInput, UserInfo} from '../redux/action-types/login';

const useLogin = () => {
  const loading = useSelector<RootState>((state) => state.auth.loginState.loading) as boolean;
  const data = useSelector<RootState>((state) => state.auth.loginState.payload) as UserInfo;
  const dispatch = useDispatch();

  const onLogin = (data: LoginInput) => {
    dispatch(login(data));
  };
  return {
    onLogin,
    loading,
    data,
  };
};

export default useLogin;
