import React, {ChangeEvent, useMemo} from 'react';
import {useAppSelector} from '../../../../store/hooks';
import {UsersAction} from '../../../../store/features/users';

export const Pagination = () => {

    const {
        totalCount,
        pageSize,
        currentPage,
    } = useAppSelector((state) => state.users);
    const {setCurrentPage, setPageSize} = UsersAction()

    const paginationPage = useMemo(() => {
        console.log('hi')
        let pagesCount: number = Math.ceil(totalCount / pageSize)
        let pagesArray = []
        for (let i = 1; i <= pagesCount; i++) {
            pagesArray.push(i)
        }
        return pagesArray
    }, [totalCount, pageSize])

    const pageSizeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        setPageSize(Number(e.currentTarget.value))
    }
    return (
        <div className="pagination">
            <div className="number">
                {paginationPage.map(el => {
                    return <button key={`${el}+button`}
                                   className={el === currentPage ? 'button active_btn' : 'button'}
                                   onClick={() => {
                                       setCurrentPage(el)
                                   }}>{el}</button>
                })}
            </div>
            <select className="select" onChange={pageSizeHandler}>
                <option>10</option>
                <option>20</option>
                <option>30</option>
            </select>
        </div>
    );
};

