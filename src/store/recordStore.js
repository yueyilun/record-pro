// login module
// 这是mobx模块
import { makeAutoObservable } from 'mobx'
import {http, setToken, getToken} from '@/utils'

class RecordStore {
    constructor() {
        // 响应式
        makeAutoObservable(this)
    }
    // 操作数据的方法
    dazuoStore = async ({time, posture, feel})=>{
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

export default RecordStore