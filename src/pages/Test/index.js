

import { useStore } from '@/store';



function Test(){
    const { testGET } = useStore()
    const send = ()=>{
        testGET.getData()
        console.log('事件被触发了')
    }
    return (
        <div>
          <div className="App">
            <button onClick={send}>Hit</button>
          </div>
        </div>
    )
}

export default Test