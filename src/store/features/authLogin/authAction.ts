import {useAppDispatch} from '../../hooks';
import {bindActionCreators} from 'redux';
import {authSlice} from './authSlice';


export const AuthAction = () => {
    const dispatch = useAppDispatch();
    return bindActionCreators(authSlice.actions, dispatch);
};