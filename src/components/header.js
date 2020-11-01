import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Layout, Menu, Image, Form, Input, Button, Modal,Row, Col,Slider } from 'antd';
import StartupGoaLogo from '../assets/StartupGoaLogo.png'
import { Link } from 'react-router-dom';
import React, { useState ,useEffect} from 'react';

const { Header } = Layout;

function Mainheader() {
  const [visible, setvisible] = useState(false);
  const [menukey, setmenukey] = useState('1');
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState(true);

const marks = {
  0: '1L',
  5: '2L',
  10: '3L',
  15: '4L',
  20: {
    style: {
      color: '#f50',
    },
    label: <strong>5L</strong>,
  },
  25: '6L',
  30: '7L',
  35: '8L',
  40: '8L',
  45: {
    style: {
      color: '#f50',
    },
    label: <strong>10L</strong>,
  },
  55: '11L',
  65: '12L',
  75: '13L',
  85: '14L',
  95: {
    style: {
      color: '#f50',
    },
    label: <strong>15L</strong>,
  },
};
  const onRequiredTypeChange = ({ requiredMark }) => {
    setRequiredMarkType(requiredMark);
  };
  const showModal = () => {
    setvisible(true)
  };
  const handleOk = () => {
    let payload={
      title:form.getFieldValue('title'),
      type:form.getFieldValue('type'),
      location:form.getFieldValue('location'),
      desc:form.getFieldValue('description'),
      category:form.getFieldValue('category'),
      salary:form.getFieldValue('salary'),
    }
    console.log(payload)
    setvisible(false)
  };

  const handleCancel = () => {
    setvisible(false)
  };

  const redirect = (key) => {
    setmenukey(key.toString())
  }
  return (
  //const { getFieldDecorator } = this.props.form;

    <Header>

      <Menu theme="light"
        mode="horizontal"
        defaultSelectedKeys={[menukey]}
        onClick={(key) => redirect(key)}

      >
        <Image
          width={80}
          src={StartupGoaLogo}
        />
        <Menu.Item key="1">
          <Link to="/">
            <span>Find Jobs</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/companies">
            <span>Companies</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="3">Blog</Menu.Item>

        <Button style={{ float: 'right' }} type="primary"
          onClick={showModal}>
          POST A JOB
          </Button>
      </Menu>

      <div style={{ fontSize: 42, fontWeight: '600', paddingTop: 50, textAlign: 'center' }}>
        Goa’s go-to job portal for tech
      </div>

      <Modal
        visible={visible}
        title="Post a job"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={
          <Button key="submit" type="primary" onClick={handleOk}>
            Submit
            </Button>
        }
      >
        <Form
      form={form}
      layout="vertical"
      initialValues={{ requiredMark }}
      onValuesChange={onRequiredTypeChange}
      requiredMark={requiredMark}
    >
    <Form.Item label="Job title" name="title" required >
        <Input placeholder="What is the job / role" />
      </Form.Item>
      <Row gutter={8}>
      <Col span={12}>
       <Form.Item label="Job type" name="type" required >
        <Input placeholder="Freelance, Full-time, Internship, Part-time" />
      </Form.Item>
      </Col>
      <Col span={12}>
      <Form.Item label="Location" name="location" required >
        <Input placeholder="Arpora, Colva, Saligao.." />
      </Form.Item>
       </Col>
        </Row>
       <Form.Item label="Job category" name="category" required >
        <Input placeholder="Development, management.." />
      </Form.Item>
       <Form.Item label="Job description" name="description" required >
        <Input.TextArea placeholder="Give an overview of whar is the job about and role & responsibility" />
      </Form.Item>
      <Form.Item label="Salary range (per annum)" name="salary" required > 
          <Slider marks={marks} step={10} defaultValue={5} /> 
      </Form.Item> 
    </Form>
      </Modal>
    </Header>


  );
}

export default Mainheader;
