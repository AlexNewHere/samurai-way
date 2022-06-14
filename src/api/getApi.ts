import axios from 'axios';
import {FallowType} from '../store/features/users';

export const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0`,
    headers: {
        'API-KEY': '34a6ba5d-948d-420a-986a-4ade213dda25'
    }
})

export const getUsersApi = (pageSize: number, currentPage: number) => {
    return (
        instance.get(`/users?count=${pageSize}&page=${currentPage}`)
            .then(response => response.data)
    )
}

export const authApi = () => {
    return (
        instance.get(`/auth/me`)
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

