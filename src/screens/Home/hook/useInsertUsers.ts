import {RootState} from '@redux/reducers';
import {useDispatch, useSelector} from 'react-redux';
import {InsertUsersInput} from '../redux/action-types/InsertUsers';
import {insertUsers} from '../redux/actions/InsertUsers';

const useInsertUsers = () => {
  const loading = useSelector<RootState>((state) => state.home.insertUsersState.loading) as boolean;
  const data = useSelector<RootState>((state) => state.home.insertUsersState.payload);
  const dispatch = useDispatch();

  const onInsertUser = (data: InsertUsersInput) => {
    console.log('data', data);
    dispatch(insertUsers(data));
  };
  return {
    onInsertUser,
    loading,
    data,
  };
};

export default useInsertUsers;
