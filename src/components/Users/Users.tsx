import React, {ChangeEvent, useEffect} from 'react';
import './UserComponents/users.css'
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {
    setPageSize,
    setCurrentPage,
    getUsersThunk
} from '../../store/features/users/usersSlice';
import {CardUser} from './UserComponents/CardUser';
import Preloader from './UserComponents/Preloader';

export const Users = () => {

    const {
        items,
        totalCount,
        pageSize,
        currentPage,
        isFetching,
        followingIsProgress
    } = useAppSelector((state) => state.users);
    const dispatch = useAppDispatch()

    useEffect(() => {
        dispatch(getUsersThunk())
    }, [pageSize, currentPage])

    let pagesCount: number = Math.ceil(totalCount / pageSize)
    let pagesArray = []
    for (let i = 1; i <= pagesCount; i++) {
        pagesArray.push(i)
    }

    const pageSizeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        dispatch(setPageSize(Number(e.currentTarget.value)))
    }

    return (
        <div>
            <div className="pagination">
                <div className="number">
                    {pagesArray.map(el => {
                        return <button key={`${el}+button`}
                                       className={el === currentPage ? 'button active_btn' : 'button'}
                                       onClick={() => {
                                           dispatch(setCurrentPage(el))
                                       }}>{el}</button>

                    })}
                </div>
                <select className="select" onChange={pageSizeHandler}>
                    <option>10</option>
                    <option>20</option>
                    <option>30</option>
                </select>
            </div>

            {isFetching ?
                <Preloader/> :
                <CardUser
                    items={items}
                    followingIsProgress={followingIsProgress}
                    follow={(action) => dispatch(action)}
                    followProgress={(action) => dispatch(action)}
                />
            }


        </div>
    );
};

