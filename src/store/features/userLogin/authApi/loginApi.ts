import {instance} from 'api';
import {
    AuthType,
    FormInputs,
    LoginDataType,
    LoginResponseType
} from 'store/features';


export const authApi = {
    me() {
        return instance.get<LoginResponseType<AuthType>>(`/auth/me`)
            .then(response => response.data)
    },
    loginApi (form: FormInputs) {
       return instance.post<LoginResponseType<LoginDataType>>(`/auth/login`, form)
            .then(response => response.data)
    },
    logoutApi () {
        return instance.delete<LoginResponseType<LoginDataType>>(`/auth/login`)
            .then(response => response.data)
    }
}
