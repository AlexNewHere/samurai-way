import {useAppDispatch} from '../../hooks';
import {bindActionCreators} from 'redux';
import {postsSlice} from './postsSlice';

export const PostAction = () => {
    const dispatch = useAppDispatch();
    return bindActionCreators(postsSlice.actions, dispatch);
};