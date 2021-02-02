import {RootState} from '@redux/reducers';
import {useDispatch, useSelector} from 'react-redux';
import {getYearTimelines} from '../redux/actions/GetYearTimelines';

const useGetYearTimelines = () => {
  const loading = useSelector<RootState>((state) => state.home.getYearTimelinesState.loading) as boolean;
  const data = useSelector<RootState>((state) => state.home.getYearTimelinesState.payload);
  const dispatch = useDispatch();

  const onGetYearTimelines = (data: string) => {
    dispatch(getYearTimelines(data));
  };
  return {
    onGetYearTimelines,
    loading,
    data,
  };
};

export default useGetYearTimelines;
