import {useAppDispatch} from '../../hooks';
import {bindActionCreators} from 'redux';
import {profileSlice} from './profileSlice';


 const UsersAction = () => {
    const dispatch = useAppDispatch();
    return bindActionCreators(profileSlice.actions, dispatch);
};