// 把所有模块做统一处理
// 导出一个统一的方法 useStore
import React from "react"
import LoginStore from "./loginStore"
import TestGET from "./testGET"
class RootStore {
    constructor() {
        this.loginStore = new LoginStore()
        this.testGET = new TestGET()

        // ...
    }
}

// 实例化根
// 导出useStore context

const rootStore = new RootStore()
const context = React.createContext(rootStore)

const useStore = ()=>React.useContext(context)

export { useStore }