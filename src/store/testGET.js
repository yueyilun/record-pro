// login module
// 这是mobx模块
import { makeAutoObservable } from 'mobx'
import {http} from '@/utils'

class TestGET {
    // 定义数据
    token = ''
    constructor() {
        // 响应式
        makeAutoObservable(this)
    }
    // 操作数据的方法
    getData = async ()=>{
        // 调用登录接口
        const res = await http.get('http://localhost:8080')
        // 存入token
        console.log(res)
        this.token = res
    }
}

export default TestGET