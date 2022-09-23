// login module
// 这是mobx模块
import { makeAutoObservable } from 'mobx'
import {http, setToken, getToken} from '@/utils'

class LoginStore {
    // 定义数据
    // 每次刷新时先去token，能取到就取，取不到就定义为空串
    token = getToken() || ''
    constructor() {
        // 响应式
        makeAutoObservable(this)
    }
    // 操作数据的方法
    getToken = async ({phonenumber, password})=>{
        // 调用登录接口
        const res = await http.post('http://localhost:8080/login', {
            phonenumber,password
        })
        // 存入token
        this.token = res.data.data.token
        console.log("这是token：",this.token)
        // 存入ls
        setToken(this.token)
    }
}

export default LoginStore