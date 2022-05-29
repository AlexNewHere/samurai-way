import {useAppDispatch} from '../../hooks';
import {bindActionCreators} from 'redux';
import {usersSlice} from './usersSlice';


export const useAction = () => {
    const dispatch = useAppDispatch();
    return bindActionCreators(usersSlice.actions, dispatch);
};