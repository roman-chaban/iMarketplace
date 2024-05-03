import { RootState } from '../../redux/rootReducer/rootReducer';
import { useSelector } from 'react-redux';

export const useAppSelector = <TSelected>(
  selector: (state: RootState) => TSelected
) => useSelector<RootState, TSelected>(selector);
