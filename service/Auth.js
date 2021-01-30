import axios from 'axios'
import config from './config'
const api = axios.create({ baseURL: config.API_ROOT_URL })

//Authentication 
const GetRequestToken = async () => {
    return 'test';
    // return await api.get(`/authentication/token/new?api_key=03aa9347957e7bfc17fe54a1ab65d5d0`)
}
const GetUserAccount = async (sessionld) => {
    return await api.get(`/account?api_key=03aa9347957e7bfc17fe54a1ab65d5d0&session_id${sessionId}`)
}
const ValidateAuthentication = async (regToken, username, password) => {
    return await api.post(`/authentication/token/validate_with_login?api_key=03aa9347957e7bfc17fe54a1ab65d5d0`, {
        request_token: reqToken,
        username: username,
        password, password
    })
}
const CreateNewSession = async (regToken) => {
    return await api.post(`/authentication/session/new?api_key=03aa9347957e7bfc17fe54a1ab65d5d0`, {
         request_token : reqToken
    })
}

export default {
    GetRequestToken,
    GetUserAccount,
    ValidateAuthentication,
    CreateNewSession,
}