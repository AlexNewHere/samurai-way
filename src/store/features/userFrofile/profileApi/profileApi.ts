import {instance} from '../../../../api';

export const getProfileApi = (userId: string) => {
    return (
        instance.get(`profile/${userId}`)
            .then(response => response.data)
    )
}
