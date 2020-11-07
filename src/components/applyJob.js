import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import {
  Layout, Menu, Image, Form, Input, Button, Modal,
  Row, Col, Slider, Select, Card, Tag, Upload, message,Alert
} from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import axios from 'axios';
import * as React from 'react';

const { useState, useEffect } = React;
const { Dragger } = Upload;

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

function ApplyJob(props) {
  const [visible, setvisible] = useState(false);
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState(true);
  console.log('data1', props)
 /*  useEffect( ()=>{
      setvisible(props.visible)
   }); */
  function getType(id) {
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
   /*  const showModal = () => {
     // setJobId(id)
      setvisible(true)
    }; */
    const handleCancel = () => {
      setvisible(false)
    };
    const handleOk = () => {
    console.log(props)
      const formData = new FormData();
      formData.append('jobId', props.jobId);
      formData.append('fullname', form.getFieldValue('name'));
      formData.append('email', form.getFieldValue('email'));
      formData.append('phonenumber', form.getFieldValue('phone').toString());
      formData.append('message', form.getFieldValue('message'));
      //formData.append('cv', 'bleh');
      console.log(formData)

      submitForm(formData)
      props.handleCancel()
    };
    const submitForm = (formData) =>{
      console.log(formData)
      axios.post('http://192.168.1.116:3000/api/company/job/apply', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
      }).then(function (response) {
          alert(response.data)    
           console.log(response.data);
          // resolve(response.data.jobsList);
      })
    }
  return (
    <div style={{ width: '400px' }}>
       <Modal
              visible={props.visible}
              title="Apply for Job"
              onOk={handleOk}
              onCancel={()=>props.handleCancel()} 
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
                <Form.Item label="Message" name="message" required >
                  <Input.TextArea placeholder="Enter a cover letter or brief description" />
                </Form.Item>
                <Form.Item label="Upload CV / Resume" name="cv"  >
                  <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Drag & Drop the file here</p>
  
                  </Dragger>
                </Form.Item>
              </Form>
            </Modal>

    </div>
  );
}

export default ApplyJob;
