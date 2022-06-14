import {instance} from '../../../../api';
import {AuthResponseType} from '../authTypes';


export const authApi = () => {
    return (
        instance.get<AuthResponseType>(`/auth/me`)
            .then(response => response.data)
    )
}
