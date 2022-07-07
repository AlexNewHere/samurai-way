import {RootState} from 'store/store';
import {UserPostType} from 'store/features';

export const getUsersItems = (state: RootState):  UserPostType[] => state.users.items
export const getFetchLoader = (state: RootState):  boolean => state.users.isFetching