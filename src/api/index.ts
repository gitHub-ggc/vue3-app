import http from '@/util/http.ts'

//get
export const getAction = (url:any,params:any) => {
    return http({
        method:"get",
        url,
        params
    })
} 

//post
export const postAction = (url:any,data:any) => {
    return http({
        method:"post",
        url,
        data
    })
} 

//upload
export const uploadAction = (url:any,params:any) => {
    return http({
        method:'get',
        url,
        params,
        responseType:'blob'
    })
}