import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Col, Card, Image, Row, Button, Avatar, Empty } from 'antd';
import StartupGoaLogo from '../assets/StartupGoaLogo.png'
import linkedinLogo from '../assets/linkedin.svg';
import locationLogo from '../assets/location.svg';
import twitterLogo from '../assets/twitter.svg'
import websiteLogo from '../assets/website.svg'
import phoneLogo from '../assets/phone.svg'
import emailLogo from '../assets/email.png'
import ApplyJob from '../components/applyJob'


import * as React from 'react';

const { useState, useEffect } = React;
function GetContent(props) {
  console.log(props)
  const [visible, setvisible] = useState(false);


  const showModal = (id) => {
    setvisible(true)
  };
  const handleCancel = () => {
    setvisible(false)
  };
  const jobData = props.jobDetails || []
  const companyData = props.companyDetails || []
  console.log("company data:- ",(companyData && !!companyData.length))

  // if(!!companyData){
  //   if(!!companyData.length){
  //     showCompany = true
  //   }
  //   console.log("company data:- " , !!companyData.length)
  // }
console.log("Job data", jobData)
  return (
    jobData.jobid ?
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
          <Col className="gutter-row" span={14} style={{ textAlign: 'right' }}>
            <div>
              <Button onClick={() => showModal(jobData.jobid)}
                type="primary" ghost>
                APPLY
                </Button>
              <ApplyJob visible={visible} jobId={jobData.jobid} handleCancel={handleCancel} />

            </div>
          </Col>
        </Row>
        <Row>
          <Col className="gutter-row">

            <div style={{ fontWeight: 600, fontSize: 14, paddingTop: 15 }}>
              JOB DESCRIPTION:
        </div>
            <div style={{ fontSize: 14 }}>
              {jobData.description}
            </div>


            <div style={{ fontSize: 14 }}>
              {jobData.jobtitle}
            </div>
            <div style={{ fontWeight: 600, fontSize: 14, paddingTop: 15 }}>
              COMPANY DESCRIPTION:
        </div>
            <div style={{ fontSize: 14 }}>
              {jobData.companydescription}
            </div>
            {jobData.salarymin ?
              <div>
                <div style={{ fontWeight: 600, fontSize: 14, paddingTop: 15 }}>
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
      companyData.compId  ?
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
            <Col className="gutter-row" span={16}>
              <div style={{ fontWeight: 600, fontSize: 24 }}>
                {companyData.companyDispName}
              </div>
              <div style={{ fontSize: 14 }}>
                {companyData.tagline}
              </div>
            </Col>

          </Row>
          <Row>
            <Col span={5}>
              <div>
                <Image
                  style={{ marginTop: 8, marginRight: 8 }}
                  width={20}
                  src={locationLogo}
                />
        Panjim, Goa
      </div>


            </Col>
            <Col span={2} offset={12}>
              <a src={websiteLogo} href={companyData.website}>
                website
      </a>
            </Col>
            <Col span={2} >
              <a href={companyData.linkedinPage}>
                <Avatar shape="square" width={20} src={linkedinLogo} />
              </a>
            </Col>
            <Col span={2} >
              <a href={companyData.facebookPage}>
                <Avatar shape="square" width={20} src={twitterLogo} />
              </a>
            </Col>
          </Row>

          <Row>
            <Col className="gutter-row">

              <div style={{ fontWeight: 600, fontSize: 14, paddingTop: 15 }}>
                COMPANY DESCRIPTION:
        </div>
              <div style={{ fontSize: 14 }}>
                {companyData.description}
              </div>
            </Col>
          </Row>
          <Row>
            <Col className="gutter-row">

              <div style={{ fontWeight: 600, fontSize: 14, paddingTop: 15 }}>
                CONTACT DEATILS:
        </div>
              <Row>
                <div style={{ marginTop: 8 }}>
                  <Image style={{ marginRight: 8 }} width={20} src={phoneLogo} />
                  {companyData.phoneNumber}
                </div>

              </Row>
              <Row>
                <div style={{ marginTop: 8 }}>
                  <Image style={{ marginRight: 8 }} width={20} src={emailLogo} />
                  {companyData.companyEmail}
                </div>

              </Row>

            </Col>
          </Row>
          <Row>
            <Col span={24} >
              <iframe class="embed-responsive-item" id="ytplayer" type="text/html" width="640" height="360" src="https://www.youtube.com/embed/6-HUJyBzw70" //{companyData.video}
                frameborder="0" allowfullscreen></iframe>
            </Col>
          </Row>

        </Card>
        :
        <Empty />
  )
}
function ContentBoard(props) {
  console.log('data2', props)
  return (
    <div style={{ width: 1000 }}>

      <GetContent jobDetails={props.jobDetails} companyDetails={props.companyDetails} />

    </div>
  );
}

export default ContentBoard;
