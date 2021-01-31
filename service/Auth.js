import axios from 'axios'
import config from './config'
const api = axios.create({ baseURL: config.API_ROOT_URL })

export const GetToken = async () => {
    return await api.get(`/authentication/token/new?api_key=80e1e0cc028987e0d21cf6e36ce54037`)
}

export const GetAccount = async (session_id) => {
    return await api.get(`/account?api_key=80e1e0cc028987e0d21cf6e36ce54037&session_id=${session_id}`)
}

export const Authentication = async (token, username, password) => {
    return await api.post(`/authentication/token/validate_with_login?api_key=80e1e0cc028987e0d21cf6e36ce54037`, {
        request_token: token,
        username: username,
        password: password
    })
}

export const Session = async (token) => {
    return await api.post(`/authentication/session/new?api_key=80e1e0cc028987e0d21cf6e36ce54037`, {
        request_token: token
    })
}