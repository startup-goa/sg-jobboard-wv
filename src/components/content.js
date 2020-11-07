import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Col, Card, Image,Row,Button } from 'antd';
import StartupGoaLogo from '../assets/StartupGoaLogo.png'
import ApplyJob from '../components/applyJob'

import * as React from 'react';

const { useState, useEffect } = React;
function GetContent(props) {
  console.log(props)
  const [visible, setvisible] = useState(false);
  let jobData = props.jobDetails
  let companyData = props.companyDetails
  console.log(companyData)
  const showModal = (id) => {
   setvisible(true)
  };
  const handleCancel = () => {
    setvisible(false)
  };
  return (
    jobData?
    <Card
      style={{ marginTop: 8, marginLeft: 5, paddingBottom: 300 }}
      type="inner"
    >
    <Row gutter={20}>
        <Col className="gutter-row" >
          <Image
            width={100}
            src={StartupGoaLogo}
            />
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={{ fontWeight: 600, fontSize: 24 }}>
                {jobData.category}
            </div>
            <div style={{ fontSize: 14 }}>
              <a href={jobData.website}>{jobData.companydispname}</a>
            </div>
            <div style={{ fontSize: 14 }}>
              {jobData.location}-{jobData.region}
            </div>
          </Col>
          <Col className="gutter-row" span={14} style={{textAlign:'right'}}>
            <div>
                <Button onClick={() =>showModal(jobData.jobid)}
                  type="primary" ghost>
                  APPLY
                </Button>
                <ApplyJob visible={visible} jobId={jobData.jobid} handleCancel={handleCancel}/>

              </div>
          </Col>
      </Row>
      <Row>
      <Col className="gutter-row">
       
       <div style={{  fontWeight: 600,fontSize: 14, paddingTop:15 }}>
          JOB DESCRIPTION:
        </div>
        <div style={{ fontSize: 14 }}>
          {jobData.description}
        </div>
       
       
        <div style={{ fontSize: 14 }}>
          {jobData.jobtitle}
        </div>
        <div style={{  fontWeight: 600,fontSize: 14, paddingTop:15 }}>
          COMPANY DESCRIPTION:
        </div>
        <div style={{ fontSize: 14 }}>
          {jobData.companydescription}
        </div>
        {jobData.salarymin ?
          <div>
            <div style={{  fontWeight: 600,fontSize: 14, paddingTop:15 }}>
              SALARY RANGE:
            </div>
            <div style={{ fontSize: 14 }}>
              {jobData.salarymin}-{jobData.salarymax}
            </div>
          </div>
          
        : null}
        

      </Col>
      </Row>
    </Card>
    :
    companyData?
    <Card
      style={{ marginTop: 8, marginLeft: 5, paddingBottom: 300 }}
      type="inner"
    >
    <Row gutter={20}>
        <Col className="gutter-row" >
          <Image
            width={100}
            src={StartupGoaLogo}
            />
          </Col>
          <Col className="gutter-row" span={6}>
            <div style={{ fontWeight: 600, fontSize: 24 }}>
                {companyData.companyDispName}
            </div>
            <div style={{ fontSize: 14 }}>
              <a href={companyData.website}>{companyData.companyDispName}</a>
            </div>
            <div style={{ fontSize: 14 }}>
              {companyData.tagline}
            </div>
          </Col>
          
      </Row>
      <Row>
      <Col className="gutter-row">
       
       <div style={{  fontWeight: 600,fontSize: 14, paddingTop:15 }}>
          COMPANY DESCRIPTION:
        </div>
        <div style={{ fontSize: 14 }}>
          {companyData.description}
        </div>
      </Col>
      </Row>
    </Card>
    :
    null
  )
}
function ContentBoard(props) {
  console.log('data2', props)
  return (
    <div style={{ width: 1000 }}>
      
        <GetContent jobDetails={props.jobDetails} companyDetails={props.companyDetails}/>
      
    </div>
  );
}

export default ContentBoard;
