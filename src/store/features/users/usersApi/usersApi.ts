import {instance} from 'api';
import {FallowType, GetUsersType} from '../userTypes';

export const getUsersApi = (pageSize: number, currentPage: number) => {
    return (
        instance.get<GetUsersType>(`/users?count=${pageSize}&page=${currentPage}`)
            .then(response => response.data)
    )
}
export const unfallowApi = (id: string) => {
    return (
        instance.delete<FallowType>(`/follow/${id}`)
            .then(response => response.data)
    )
}
export const fallowApi = (id: string) => {
    return (
        instance.post<FallowType>(`/follow/${id}`)
            .then(response => response.data)
    )
}