import {instance} from 'api';
import {FormInputs, LoginResponseType} from 'store/features';

export const loginApi = (form: FormInputs) => {
    return (
        instance.post<LoginResponseType>(`/auth/login`, form)
            .then(response => response.data)
    )
}
