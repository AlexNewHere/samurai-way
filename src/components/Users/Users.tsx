import React, {ChangeEvent, useEffect} from 'react';
import axios from 'axios';
import './UserComponents/users.css'
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {setUsers, setPageSize, setCurrentPage, toggleIsFetching} from '../../store/features/users/usersSlice';
import {CardUser} from './UserComponents/CardUser';
import Preloader from './UserComponents/Preloader';

export const Users = () => {

    const {items, totalCount, pageSize, currentPage, isFetching} = useAppSelector((state) => state.users);
    const dispatch = useAppDispatch()

    useEffect( () => {
        dispatch(toggleIsFetching(true))
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${pageSize}&page=${currentPage}`, {withCredentials: true})
            .then(response => {
                dispatch(setUsers(response.data))
                dispatch(toggleIsFetching(false))
            })
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
                        return <button key={`${el}+button`} className={el === currentPage ? 'button active_btn' : 'button'}
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

            {isFetching ? <Preloader/> :
                <CardUser
                    items={items}
                    follow={(action) => dispatch(action)}
                />
            }


        </div>
    );
};

