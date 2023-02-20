import request from '@/utils/request'
/**
 * @description: 用户列表
 * @param params
 * */

export function users(params: any) {
    return request({
        url: '/api/admin/users',
        method: 'GET',
        params
    })
}

//添加用户
export function addUser(data: any) {
    return request({
        url: '/api/admin/users',
        method: 'POST',
        data
    })
}

//禁用和启用
export function getUserLock(userid: any) {
    return request({
        url: `/api/admin/users/${userid}/lock`,
        method: 'PATCH'
    })
}

export function getUserInfo(userid: any) {
    return request({
        url: `/api/admin/users/${userid}`,
        method: 'get'
    })
}

export function updateUser(userid: any,data: any) {
    return request({
        url: `/api/admin/users/${userid}`,
        method: 'put',
        data
    })
}