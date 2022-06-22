import {instance} from 'api';
import {GetProfileType} from 'store/features';


export const profileAPI = {
    getProfile(userId: string) {
        return (
            instance.get<GetProfileType>(`profile/${userId}`)
                .then(response => response.data)
        )
    }
}



