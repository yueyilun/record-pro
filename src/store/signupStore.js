// login module
// 这是mobx模块
import { makeAutoObservable } from 'mobx'
import {http} from '@/utils'

class SignupStore {
    // 定义数据
    token = ''
    constructor() {
        // 响应式
        makeAutoObservable(this)
    }
    // 操作数据的方法
    getToken = async ({username,phonenumber, password,password2})=>{
        // 调用登录接口
        const res = await http.post('http://localhost:8080/signup', {
            username,phonenumber,password,password2
        })
        // 存入token
        this.token = res.data.token
    }
}

export default SignupStore