//import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Layout, Menu, Image, Form, Input, Button, Modal,Row, Col,Slider,Select } from 'antd';
import StartupGoaLogo from '../assets/StartupGoaLogo.png'
import { Link } from 'react-router-dom';
import React, { useState ,useEffect} from 'react';
import axios from 'axios';
const { Option } = Select;
const { Header } = Layout;

function Mainheader() {
  const [visible, setvisible] = useState(false);
  const [menukey, setmenukey] = useState('1');
  const [jobtype, setjobtype] = useState('2');
  const [email, setEmail] = useState('')
  const [openSignUp, setOpenSignup] = useState(false)
  const [form] = Form.useForm();
  const [requiredMark, setRequiredMarkType] = useState(true);
  const [auth,setAuth]=useState('')
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
  function handleChange(value) {
    setjobtype(value)
  
}
const submitJob = (auth) => {
  let payload={
      title:form.getFieldValue('title'),
      type:jobtype,
      email:form.getFieldValue('email'),
      location:form.getFieldValue('location'),
      region:form.getFieldValue('region'),
      phone:form.getFieldValue('phoneno'),
      desc:form.getFieldValue('description'),
      category:form.getFieldValue('category'),
      salarymin:form.getFieldValue('salary')[0],
      salarymax:form.getFieldValue('salary')[1]
    }
   // setAuth(null)
   console.log(auth)
    if(auth){
      axios.post('api/company/job', payload, {
                  headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: 'Bearer '+auth 
                  }
            }).then(function (response) {
                alert(response.data)
                setvisible(false)
                console.log(response.data);
            })
     
    }

}
  const handleOk = () => {
    let payload={
      title:form.getFieldValue('title'),
      type:jobtype,
      email:form.getFieldValue('email'),
      location:form.getFieldValue('location'),
      region:form.getFieldValue('region'),
      phone:form.getFieldValue('phoneno'),
      desc:form.getFieldValue('description'),
      category:form.getFieldValue('category'),
      salarymin:form.getFieldValue('salary')[0],
      salarymax:form.getFieldValue('salary')[1]
    }
   // setAuth(null)
   console.log(auth)
   /*  if(auth){
      axios.post('api/company/job', payload, {
                  headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: 'Bearer'+auth 
                  }
            }).then(function (response) {
              setAuth(null)
                alert(response.data)
                setvisible(false)
                console.log(response.data);
            })
     
    }else{ */
      axios.get('api/company?email='+payload.email)
          .then(function (response) {
            console.log(response.data)
            if(response.data.companyList.length===0){
              setEmail(payload.email)
              const formData = new FormData();
              formData.append('email', payload.email);
              formData.append('phoneNumber', payload.phone);
              formData.append('password', 'test');
              formData.append('companyUserName', payload.email);
              formData.append('companyDispName', form.getFieldValue('company'));
              console.log(formData)
              signUp(formData)
              setOpenSignup(true)
            }else{
              let loginPayload={
                "username":form.getFieldValue('email'),
                "password": 'test'
              }
              signIn(loginPayload)
            }
            //setData(response.data.jobsList)
            // resolve(response.data.jobsList);
          })
    
     // }
    
  };
  const signIn =(payload)=>{
          
            axios.post('api/company/auth/login', payload, {
              headers: {
                'Content-Type': 'application/json'
              }
            }).then(function (response) {
                submitJob(response.data.token)
                //handleOk()
                console.log(response.data.token);
            })  
  }
 const signUp = (formData) =>{
      console.log(formData)
      axios.post('api/company/auth/signup', formData, {
            headers: {
              'Content-Type': 'multipart/form-data'
            }
      }).then(function (response) {
           let loginPayload={
              "username":form.getFieldValue('email'),
              "password": 'test'
            }
            signIn(loginPayload)
           console.log(response.data);
      }).catch(function (err) {
            //user sigded Up but not approved
           let loginPayload={
              "username":form.getFieldValue('email'),
              "password": 'test'
            }
            signIn(loginPayload)
      })
    }
  const handleCancel = () => {
    setvisible(false)
  };

  const redirect = (key) => {
    setmenukey(key.toString())
  }
  const navItemStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }
  return (
  //const { getFieldDecorator } = this.props.form;

  <div style={{ background: "white", padding: "8px 0", marginBottom: 24 }}>
  <Row>
    <Col span={24}>
      <Row>
        <Col span={2} style={navItemStyle}>
          <Link to="/" activeStyle={{ color: "#F3712A" }}>
            <img  height={50} src={StartupGoaLogo}/>
          </Link>
        </Col>
        <Col span={1} style={navItemStyle}>
          <Link to="/jobs" activeStyle={{ color: "#F3712A" }}>
             Jobs
          </Link>
        </Col>
        <Col span={1} style={navItemStyle}>
          <Link to="/companies" activeStyle={{ color: "#F3712A" }}>
             Companies
          </Link>
        </Col>
        <Col span={3} offset={17} >
        <Button  style={{marginTop: 6}} type="primary"
        onClick={showModal}>
        POST A JOB
        </Button>
        </Col>
      </Row>
    </Col>
  </Row>

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
        <Form.Item label="Email" name="email" required >
          <Input placeholder="Enter email ID" />
        </Form.Item>
       
        <Form.Item label="Company Name" name="company" required >
          <Input placeholder="Enter company name" />
        </Form.Item>
        <Form.Item label="Job title" name="title" required >
          <Input placeholder="What is the job / role" />
        </Form.Item>
        <Row gutter={8}>
          <Col span={12}>
          <Form.Item label="Job type" name="type" required >
            <Select defaultValue={jobtype} style={{ width: 120 }} >
              <Option value="1">Freelance</Option>
              <Option value="2">Full-time</Option>
              <Option value="3">Internship</Option>
              <Option value="4">Part-time</Option>
            </Select>
            </Form.Item>
          </Col>
         <Col span={12}>
          <Form.Item label="Location" name="location" required >
            <Input placeholder="Arpora, Colva, Saligao.." />
          </Form.Item>
        </Col>
          </Row>
          <Row gutter={8}>
            <Col span={12}>
            <Form.Item label="Phone no" name="phoneno" required >
              <Input placeholder="8007385851" />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item label="Region" name="region" required >
                <Input placeholder="north goa, south goa.." />
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
            <Slider range marks={marks} step={10} defaultValue={[5, 15]} /> 
        </Form.Item> 
      </Form>
      </Modal>
    </div>

  );
}

export default Mainheader;
