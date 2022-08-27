import {RootState} from 'store/store';
import {UserPostType} from 'store/features';

export const getUsersItems = (state: RootState):  UserPostType[] => state.users.items

export const getFetchLoader = (state: RootState):  boolean => state.users.isFetching

export const getPageSize = (state: RootState):  number => state.users.pageSize

export const getCurrentPage = (state: RootState):  number => state.users.currentPage

export const getFollowingIsProgress = (state: RootState):  string[] => state.users.followingIsProgress


