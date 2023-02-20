import request from '@/utils/request'
/**
 * @description: 分类列表
 * @param params
 * */
//分类列表
export function category(params: any) {
    return request({
        url: '/api/admin/category',
        method: 'get',
        params
    })
}

//添加分类
export function addCategory(data: any) {
    return request({
        url: '/api/admin/category',
        method: 'post',
        data
    })
}

//分类详情
export function getCategoryInfo(categoryid: any) {
    return request({
        url: `/api/admin/category/${categoryid}`,
        method: 'get',
    })
}

//更新分类
export function updateCategory(categoryid: any,data: any) {
    return request({
        url: `/api/admin/category/${categoryid}`,
        method: 'put',
        data
    })
}

//禁用和启用
export function getCategoryLock(categoryid: any) {
    return request({
        url: `/api/admin/category/${categoryid}/status`,
        method: 'PATCH',
    })
}

//分类排序
export function getCategorySeq(categoryid: any,params: any) {
    return request({
        url: `/api/admin/category/${categoryid}/seq`,
        method: 'PATCH',
        params
    })
}