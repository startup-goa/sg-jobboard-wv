import '../App.css'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Layout, Col, Row } from 'antd';
import Header from '../components/header'
import SideCardList from '../components/sideCardList'
import ContentBoard from '../components/content'
import axios from 'axios';
import * as React from 'react';

const { useState, useEffect } = React;

const { Content, Footer} = Layout;

function FindJobs() {
  const [jobData, setData] = useState([{}]);

  useEffect(() => {
   axios.get('http://localhost:3000/api/company/jobs/?pageno=1&perpage=3')
        .then(function (response) {
          console.log(response.data.jobsList)
          setData(response.data.jobsList)
           // resolve(response.data.jobsList);
        })
  }, [])
  return (
    <Layout className="layout">
      <Header />

      <Content style={{background: '#E5E5E5' }}>
        <Row gutter={20}>
        <Col span={7}>
        <SideCardList data={jobData}/>
        </Col>
        <Col span={10}>
       
        <ContentBoard />
        </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Startup Goa ©2020</Footer>
    </Layout>
  );
}

export default FindJobs;
