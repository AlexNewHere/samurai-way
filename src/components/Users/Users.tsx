import React, {ReactElement, useEffect} from 'react';
import './UserComponents/users.css'
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {CardUser, Pagination, Preloader} from 'components/Users';
import {getUsersThunk, setCurrentPage, setPageSize} from 'store/features';
import {
    getCurrentPage,
    getFetchLoader,
    getUsersItems,
    getPageSize,
    getFollowingIsProgress
} from 'store';

export const Users = (): ReactElement => {

    const pageSize = useAppSelector(getPageSize);
    const currentPage = useAppSelector(getCurrentPage);
    const followingIsProgress = useAppSelector(getFollowingIsProgress);
    const items = useAppSelector(getUsersItems)
    const isFetching = useAppSelector(getFetchLoader)

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getUsersThunk())
    }, [pageSize, currentPage, dispatch])

    useEffect(() => {
        return () => {
            dispatch(setCurrentPage(1))
            dispatch(setPageSize(10))
        }
    }, [dispatch])

    return (
        <div>
            <Pagination/>
            {isFetching ?
                <Preloader/> :
                <CardUser
                    items={items}
                    followingIsProgress={followingIsProgress}
                />
            }
        </div>
    );
};

