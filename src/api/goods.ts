import request from "@/utils/request";
/**
 * @description: 商品列表
 * @param params
 * */
// 商品列表
export function goods(params: any) {
    return request({
        url: '/api/admin/goods',
        method: 'get',
        params
    })
}

// 添加商品
export function addGood(data: any) {
    return request({
        url: '/api/admin/goods',
        method: 'post',
        data
    })
}
// 商品详情
export function getGoodInfo(goodid: any) {
    return request({
        url: `/api/admin/goods/${goodid}`,
        method: 'get'
    })
}

// 修改商品
export function changeGood(goodid: any,data: any) {
    return request({
        url: `/api/admin/goods/${goodid}`,
        method: 'put',
        data
    })
}

// 上架和下架
export function getGoodLock(goodid: any) {
    return request({
        url: `/api/admin/goods/${goodid}/on`,
        method: 'patch',
    })
}

// 推荐和不推荐
export function recommendGood(goodid: any) {
    return request({
        url: `/api/admin/goods/${goodid}/recommend`,
        method: 'patch',
    })
}