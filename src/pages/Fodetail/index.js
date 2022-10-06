import {
    Card,
    Breadcrumb,
    Form,
    Button,
    Radio,
    Input,
    Upload,
    Space,
    Select
  } from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import './index.scss'

import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'
import { http } from '@/utils'

const { Option } = Select

const Fodetail = () => {
  const onFinish = async (values) => {
    console.log(values)
    const { time, posture, feel } = values;
    const params = {
        time,
        posture,
        feel
    }
    // values:放置的是所有表单项中用户输入的内容,name
    // todo：登录
    await http.post('http://localhost:8080/fo/dazuo', params)
    // 跳转首页
    console.log("提交成功")

  }
  return (
    <div className="record">
      <Card
        title={
          <Breadcrumb separator=">">
            <Breadcrumb.Item>
              <Link to="/">首页</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>佛</Breadcrumb.Item>
          </Breadcrumb>
        }
      >
        <Form
          onFinish={ onFinish }
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          // 注意：此处需要为富文本编辑表示的 content 文章内容设置默认值
          initialValues={{ content: '' }}
        >
          <Form.Item
            label="时间"
            name="time"
            rules={[{ required: true, message: '请输入打坐时间' }]}
          >
            <Input placeholder="请输入打坐时间" style={{ width: 400 }} />
          </Form.Item>

          <Form.Item
            label="坐姿"
            name="posture"
            rules={[{ required: true, message: '请选择打坐坐姿' }]}
          >
            <Select placeholder="请选择打坐坐姿" style={{ width: 400 }}>
              <Option value={"左外散盘"}>左外散盘</Option>
              <Option value={"右外散盘"}>右外散盘</Option>
              <Option value={"左上单盘"}>左上单盘</Option>
              <Option value={"右上单盘"}>右上单盘</Option>
              <Option value={"左上双盘"}>左上双盘</Option>
              <Option value={"右上双盘"}>右上双盘</Option>

            </Select>
          </Form.Item>



          {/* <Form.Item label="封面">
            <Form.Item name="type">
              <Radio.Group>
                <Radio value={1}>单图</Radio>
                <Radio value={3}>三图</Radio>
                <Radio value={0}>无图</Radio>
              </Radio.Group>
            </Form.Item>
            <Upload
              name="image"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList
            >
              <div style={{ marginTop: 8 }}>
                <PlusOutlined />
              </div>
            </Upload>
          </Form.Item> */}

          <Form.Item
            label="感受"
            name="feel"
            rules={[{ required: true, message: '请输入打坐感受' }]}
          >
            <ReactQuill
              className="publish-quill"
              theme="snow"
              placeholder="请输入打坐感受"
            />            
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 4 }}>
            <Space>
              <Button size="large" type="primary" htmlType="submit">
                发布打坐记录
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Fodetail