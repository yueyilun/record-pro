// login module
// 这是mobx模块
import { makeAutoObservable } from 'mobx'
import {http} from '@/utils'

class LoginStore {
    // 定义数据
    token = ''
    constructor() {
        // 响应式
        makeAutoObservable(this)
    }
    // 操作数据的方法
    getToken = async ({mobile, code})=>{
        // 调用登录接口
        const res = await http.post('http://localhost:8080', {
            mobile,code
        })
        // 存入token
        this.token = res.data.data.token
    }
}

export default LoginStore