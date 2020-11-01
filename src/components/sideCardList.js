import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Layout, Menu, Image, Form, Input, Button, Modal,
Row, Col,Slider,Select , Card, Tag,Upload, message} from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import axios from 'axios';
import * as React from 'react';

const { useState, useEffect } = React;
const { Dragger } = Upload;

/* let data = [{
  company_name: 'Numadic',
  catergory: 'Fullstack developer',
  type: 'Full time',
  location: 'Panjim, GA'
},
{
  company_name: 'Numadic',
  catergory: 'Fullstack developer',
  type: 'Full time',
  location: 'Panjim, GA'
}
] */
const props = {
  name: 'file',
  multiple: true,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

function GetData(props) {
  console.log('data',props)
  const [visible, setvisible] = useState(false);
  const [form] = Form.useForm();
 const [requiredMark, setRequiredMarkType] = useState(true);

  function getType (id){
      switch (id) {
        case 1:
          return 'Full-time'
        case 2:
          return 'Internship'
        case 3:
          return 'Freelance'
        case 4:
          return 'Part-time'
      }
  }
 const onRequiredTypeChange = ({ requiredMark }) => {
    setRequiredMarkType(requiredMark);
  };
  const showModal = () => {
    setvisible(true)
  };
   const handleCancel = () => {
    setvisible(false)
  };
  const handleOk = () => {
    setvisible(false)
  };
  return (
    props.jobData.map(d => (
      <Card
        style={{ marginTop: 8, marginLeft: 5 }}
        type="inner"
        onClick={showModal}
      >
        <Row gutter={20}>
          <Col className="gutter-row" span={16}>
            <div style={{ fontWeight: 600, fontSize: 18 }}>
              {d.category}
            </div>
            <div style={{ fontSize: 14 }}>
              {d.companydispname}
            </div>
            <div style={{ fontSize: 14 }}>
              {d.location}
            </div>
          </Col>

          <Col className="gutter-row" span={4}>
            <div style={{ paddingBottom: 10 }}>
              <Tag color="blue">{getType(d.type)}</Tag>
            </div>
            <div>
              <Button onClick={showModal}
                size="small" type="primary" ghost>
                APPLY
              </Button>
            </div>
          </Col>
        </Row>

        <Modal
          visible={visible}
          title="Apply for Job"
          onOk={handleOk}
          onCancel={handleCancel}
          footer={
            <Button key="submit" type="primary" onClick={handleOk}>
              Submit Application
            </Button>}
        >
          <Form
            form={form}
            layout="vertical"
            initialValues={{ requiredMark }}
            onValuesChange={onRequiredTypeChange}
            requiredMark={requiredMark}
          >
         
            <Form.Item label="Full name" name="name" required >
              <Input placeholder="Enter your fullname" />
            </Form.Item>
            <Row gutter={8}>
            <Col span={12}>
             <Form.Item label="Email address" name="email" required >
              <Input placeholder="abc@example.com" />
            </Form.Item>
            </Col>
            <Col span={12}>
             <Form.Item label="Mobile No." name="phone" required >
              <Input placeholder="Enter mobile no." />
            </Form.Item>
            </Col>
          </Row>
          <Form.Item label="Upload CV / Resume" name="cv" required >
            <Dragger {...props}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">Drag & Drop the file here</p>
              
            </Dragger>
            </Form.Item>
          </Form>
        </Modal>
      </Card>
    ))
  )
}
function SideCardList(props) {
    console.log('data1',props)

  return (
    <div style={{ width: '400px' }}>
      <GetData jobData={props.data}/>

    </div>
  );
}

export default SideCardList;
