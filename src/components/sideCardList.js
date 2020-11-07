import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import {
  Layout, Menu, Image, Form, Input, Button, Modal,
  Row, Col, Slider, Select, Card, Tag, Upload, message
} from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import axios from 'axios';
import ApplyJob from '../components/applyJob'

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

function GetData(props) {
  console.log('data', props)
  const [visible, setvisible] = useState(false);
  const [form] = Form.useForm();
  const [jobId,setJobId]= useState(0);
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
  
  const showModal = (id) => {
   setvisible(true)
   setJobId(id)
    
  };
  const handleCancel = () => {
    setvisible(false)
  };
 
   const submitForm = (formData) =>{
    console.log(formData)
     axios.post('api/company/job/apply', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
    }).then(function (response) {
      console.log(response.data);
        // resolve(response.data.jobsList);
    })
  }

  let jobData=props.jobData || []
  let companyData=props.companyData || []
  return (
    (jobData.length) >0 ? 
      jobData.map(d => (
        <div className="pointer"
          onClick={()=>props.getJobDetails(d)}>
          <Card
            style={{ marginTop: 8, marginLeft: 5 }}
            type="inner"
  
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
                   <Button onClick={() =>showModal(d.jobid)}
                    size="small" type="primary" ghost>
                    APPLY
                  </Button>
                </div>
              </Col>
            </Row>
            <ApplyJob visible={visible} jobId={d.jobid} handleCancel={handleCancel}/>
          </Card>
  
        </div>
      ))
   
    :(companyData.length) >0 ? 
      companyData.map(d => (
        <div className="pointer"
          onClick={()=>props.getCompanyDetails(d)}>
          <Card
            style={{ marginTop: 8, marginLeft: 5 }}
            type="inner"
  
          >
            <Row gutter={20}>
              <Col className="gutter-row" span={16}>
                <div style={{ fontWeight: 600, fontSize: 18 }}>
                  {d.companyDispName}
                </div>
                <div style={{ fontSize: 14 }}>
                  {d.phoneNumber}
                </div>
                <div style={{ fontSize: 14 }}>
                  {d.website}
                </div>
              </Col>
  
              <Col className="gutter-row" span={4}>
                <div style={{ paddingBottom: 10 }}>
                  <Tag color="blue">{d.tagline}</Tag>
                </div>
              </Col>
            </Row>
            <ApplyJob visible={visible} jobId={jobId} handleCancel={handleCancel}/>
          </Card>
  
        </div>
      ))
   
    :null
    
    )
    
}
function SideCardList(props) {
  console.log('data1', props)

  return (
    <div style={{ width: '400px' }}>
      <GetData 
              jobData={props.jobData} getJobDetails={props.getJobDetails}
              companyData={props.companyData} getCompanyDetails={props.getCompanyDetails}
      />
    </div>
  );
}

export default SideCardList;
