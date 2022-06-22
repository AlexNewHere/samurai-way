import {instance} from 'api';
import {StatusUpdateType} from 'store/features/userStatus';


export const statusApi = {
       getStatus(userId: string) {
        return (
            instance.get<string | null>(`profile/status/${userId}`)
                .then(response => response.data)
        )
    },
    updateStatus(status: string) {
        return (
            instance.put<StatusUpdateType>(`profile/status`, {status})
                .then(response => response.data)
        )
    }
}



