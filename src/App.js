import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import { AuthRoute } from './components/AuthRoute';
import Index from './pages/Index';
import Login from './pages/Login';
// import Test from './pages/Test';
import Signup from './pages/Signup'
import Foindex from './pages/Foindex'
import Test from './pages/Test';


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
          <Route path='/fo' element={<Foindex />}></Route>
          <Route path='/test' element={<Test />}></Route>


          {/* <Route path='/' element={<Test />}></Route> */}

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
