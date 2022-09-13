import { Card } from 'antd'
// @代表src目录，"."代表当前目录
import logo from '@/assets/logo.png'
import './index.scss'
import { Button, Checkbox, Form, Input } from 'antd';
import { useStore } from '@/store';
import { useNavigate } from 'react-router-dom';



const Login = () => {
  // useStore创建的是Rootstore对象，RootStore中包含loginStore对象
  const { loginStore } = useStore()
  // 这个导航函数可以完成跳转
  const navigate = useNavigate()
  const onFinish = values => {
    console.log(values)
    // values:放置的是所有表单项中用户输入的内容
    // todo：登录
    loginStore.getToken({
      mobile:values.username,
      code:values.password
    })
    // 跳转首页
    navigate('/layout')
  }

  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        {/* 登录表单 */}
        <Form
          onFinish={ onFinish }
        >
          <Form.Item name="username">
            <Input size="large" placeholder="请输入手机号" />
          </Form.Item>
          <Form.Item name="password">
            <Input size="large" placeholder="请输入验证码" />
          </Form.Item>
          <Form.Item 
            name="remember"
            valuePropName="checked"
          >
            <Checkbox className="login-checkbox-label">
              我已阅读并同意「用户协议」和「隐私条款」
            </Checkbox>
          </Form.Item>
    
          <Form.Item>
            {/* 渲染Button组件为submit按钮  */}
            <Button type="primary" htmlType="submit" size="large" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login