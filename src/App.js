import { BrowserRouter, Route, Routes} from 'react-router-dom'
// import { AuthRoute } from './components/AuthRoute';
import Index from './pages/Index';
import Login from './pages/Login';
// import Test from './pages/Test';
import Signup from './pages/Signup'
// import Foindex from './pages/Foindex'
import Test from './pages/Test';
import Fodetail from './pages/Fodetail';


import './App.css';

function App() {
  return (
    // 路由配置
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* 创建路由path和组件对应关系 */}
          {/* Layout需要鉴权处理（本地是否有token）,在本项目中不需要 */}
          <Route path='/' element={<Index />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/fo' element={<Fodetail />}>
            {/* 二级路由是针对只在某个组件内部跳转，并不转入一个全新的页面，因此需要路由出口，也就是不变的那个组件
             */}
            {/* 比如左侧有菜单栏，点击不同选项会发生局部跳转，但是左侧菜单并不改变 */}
            {/* 因此此处的Fodetail组件并不适用于二级跳转 */}
            {/* <Route path='detail' element={<Fodetail />}></Route> */}
          </Route>
          <Route path='/test' element={<Test />}></Route>
          {/* <Route path='/fo/detail' element={<Fodetail />}></Route> */}



          {/* <Route path='/' element={<Test />}></Route> */}

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
