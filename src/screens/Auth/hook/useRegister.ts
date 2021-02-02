import {register} from '@screens/Auth/redux/actions';
import {RootState} from '@redux/reducers';
import {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RegisterInput} from '../redux/action-types';

const useRegister = () => {
  const loading = useSelector<RootState>((state) => state.auth.registerState.loading) as boolean;
  const data = useSelector<RootState>((state) => state.auth.registerState.payload);
  const dispatch = useDispatch();

  const onRegister = (data: RegisterInput) => {
    dispatch(register(data));
  };
  return {
    onRegister,
    loading,
    data,
  };
};

export default useRegister;
