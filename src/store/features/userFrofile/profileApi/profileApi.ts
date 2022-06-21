import {instance} from 'api';
import {ProfileUserType} from '../index';


export const getProfileApi = (userId: string) => {
    return (
        instance.get<ProfileUserType>(`profile/${userId}`)
            .then(response => response.data)
    )
}
