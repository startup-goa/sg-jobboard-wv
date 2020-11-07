import '../App.css'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Layout, Col, Row} from 'antd';
import Header from '../components/header'
import SideCardList from '../components/sideCardList'
import ContentBoard from '../components/content'
import * as React from 'react';
import axios from 'axios';
const { Content, Footer} = Layout;

const { useState, useEffect } = React;
function ViewCompanyDetails() {
  const [companyData, setCompanyData] = useState([{}]);
  const [companyDetails, setCompanyDetails] = useState({})
  useEffect(() => {
   axios.get('http://192.168.1.116:3000/api/company')
        .then(function (response) {
          console.log(response.data)
          setCompanyData(response.data.companyList)
           // resolve(response.data.jobsList);
        })
  }, [])
  const getCompanyDetails=(details)=>{
    console.log(details)
    setCompanyDetails(details || {})
  }
  return (
    <Layout className="layout">
      <Header />

      <Content style={{ background: '#E5E5E5' }}>
       <Row gutter={20}>
        <Col span={17}>
          <ContentBoard companyDetails={companyDetails}/>

        </Col>
        <Col span={3}>
          <SideCardList companyData={companyData} getCompanyDetails={getCompanyDetails} />    
        </Col>
        </Row> 
      </Content>
      <Footer style={{ textAlign: 'center' }}>Startup Goa ©2020</Footer>
    </Layout>
  );
}

export default ViewCompanyDetails;
