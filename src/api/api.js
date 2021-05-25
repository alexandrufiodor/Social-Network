import * as axios from 'axios'


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '367b5061-81a8-4346-a38b-61dffe8fe508'
    }
})

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    follow(id) {
        return instance.post(`follow/${id}`, {}).then(response => response.data)
    },
    unfollow(id) {
        return instance.delete(`follow/${id}`).then(response => response.data)
    }
}

export const profileAPI = {
    getProfile(userID) {
        return instance.get(`profile/${userID}`).then(response => response.data)
    },
    getStatus(userID) {
        return instance.get(`profile/status/${userID}`).then(response => response.data)
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status}).then(response => response.data)
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`).then(response => response.data);
    }
}
