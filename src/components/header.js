import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Layout, Menu, Image, Button, Modal } from 'antd';
import StartupGoaLogo from '../assets/StartupGoaLogo.png'
import { Link } from 'react-router-dom';
import * as React from 'react';

const { Header } = Layout;
const { useState, useEffect } = React;

function Mainheader() {
  const [visible, setvisible] = useState(false);
  const [menukey, setmenukey] = useState('1');

  const showModal = () => {
    setvisible(true)
  };
  const handleOk = () => {
    setvisible(false)
  };

  const handleCancel = () => {
    setvisible(false)
  };

  const redirect = (key) => {
    setmenukey(key.toString())
  }
  return (

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
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
            </Button>,
          <Button key="submit" type="primary" onClick={handleOk}>
            Submit
            </Button>,
        ]}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </Header>


  );
}

export default Mainheader;
