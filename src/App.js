import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './pages/Layout';
import Login from './pages/Login';
// import Test from './pages/Test';
import Signup from './pages/Signup'

import './App.css';

function App() {
  return (
    // 路由配置
    <BrowserRouter>
      <div className="App">
        <Routes>
          {/* 创建路由path和组件对应关系 */}
          <Route path='/' element={<Layout />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          {/* <Route path='/' element={<Test />}></Route> */}

        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
