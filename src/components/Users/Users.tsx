import React, {useEffect} from 'react';
import './UserComponents/users.css'
import {useAppDispatch, useAppSelector} from 'store/hooks';
import {CardUser, Pagination, Preloader} from './UserComponents';
import {getUsersThunk} from 'store/features';

export const Users = () => {

    const {
        items,
        pageSize,
        currentPage,
        isFetching,
        followingIsProgress
    } = useAppSelector((state) => state.users);

    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getUsersThunk())
    }, [pageSize, currentPage, dispatch])

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

