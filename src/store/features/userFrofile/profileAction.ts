import {useAppDispatch} from '../../hooks';
import {bindActionCreators} from 'redux';
import {profileSlice} from './profileSlice';


export const ProfileAction = () => {
    const dispatch = useAppDispatch();
    return bindActionCreators(profileSlice.actions, dispatch);
};