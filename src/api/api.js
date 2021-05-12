import * as axios from 'axios'


const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '367b5061-81a8-4346-a38b-61dffe8fe508'
    }
})

// export const getUsers = (currentPage = 1, pageSize = 10) => {
//     return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
//         withCredentials: true
//     }).then(response => response.data)
// }

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10)  {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    follow(id)  {
        return instance.post(`follow/${id}`, {}).then(response => response.data)
    },
    unfollow(id)  {
        return instance.delete(`follow/${id}`).then(response => response.data)
    }
}