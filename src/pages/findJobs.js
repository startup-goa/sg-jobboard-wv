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
  const [jobDetails, setjobDetails] = useState({})
  useEffect(() => {
   axios.get('api/company/jobs/?pageno=1&perpage=3')
        .then(function (response) {
          console.log(response.data.jobsList)
          setData(response.data.jobsList)
           // resolve(response.data.jobsList);
        })
  }, [])
  const getJobDetails=(details)=>{
    console.log(details)
    setjobDetails(details || {})
  }
  return (
    <Layout className="layout">
      <Header />

      <Content style={{background: '#E5E5E5' }}>
        <Row gutter={17}>
        <Col span={7}>
        <SideCardList jobData={jobData} getJobDetails={getJobDetails}/>
        </Col>
        <Col span={10}>
       
        <ContentBoard jobDetails={jobDetails}/>
        </Col>
        </Row>
      </Content>
      <Footer  style={{ textAlign: 'center' }}>Startup Goa ©2020</Footer>
    </Layout>
  );
}

export default FindJobs;
