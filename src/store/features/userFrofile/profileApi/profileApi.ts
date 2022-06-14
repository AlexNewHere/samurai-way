import {instance} from '../../../../api';
import {ProfileUserType} from '../profileTypes';

export const getProfileApi = (userId: string) => {
    return (
        instance.get<ProfileUserType>(`profile/${userId}`)
            .then(response => response.data)
    )
}
