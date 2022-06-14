import {useAppDispatch} from '../../hooks';
import {bindActionCreators} from 'redux';
import {usersSlice} from './usersSlice';

export const UsersAction = () => {
    const dispatch = useAppDispatch();
    
    return bindActionCreators(usersSlice.actions, dispatch);
};