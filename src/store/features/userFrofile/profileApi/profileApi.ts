import {instance} from 'api';
import {ProfileUserType} from 'store/features/userFrofile/profileTypes';



export const profileAPI = {
    getProfile (userId: string) {
        return (
            instance.get<ProfileUserType>(`profile/${userId}`)
                .then(response => response.data)
        )
    },
    getStatus (userId: string) {
        return (
            instance.get<string>(`profile/status/${userId}`)
                .then(response => response.data)
        )
    },
    updateStatus (status: string) {
        return (
            instance.put<string>(`profile/status`, {status})
                .then(response => response.data)
        )
    }
}



