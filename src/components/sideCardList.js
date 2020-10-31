import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Row, Col, Card, Tag, Button,Modal } from 'antd';
import * as React from 'react';

const { useState, useEffect } = React;

let data = [{
  company_name: 'Numadic',
  catergory: 'Fullstack developer',
  type: 'Full time',
  location: 'Panjim, GA'
},
{
  company_name: 'Numadic',
  catergory: 'Fullstack developer',
  type: 'Full time',
  location: 'Panjim, GA'
}
]

function GetData() {
  const [visible, setvisible] = useState(false);

  const showModal = () => {
    setvisible(true)
  };
  const handleOk = () => {
    setvisible(false)
  };
  return (
    data.map(d => (
      <Card
        style={{ marginTop: 8, marginLeft: 5 }}
        type="inner"
      >
        <Row gutter={20}>
          <Col className="gutter-row" span={16}>
            <div style={{ fontWeight: 600, fontSize: 18 }}>
              {d.catergory}
            </div>
            <div style={{ fontSize: 14 }}>
              {d.company_name}
            </div>
            <div style={{ fontSize: 14 }}>
              {d.location}
            </div>
          </Col>

          <Col className="gutter-row" span={4}>
            <div style={{ paddingBottom: 10 }}>
              <Tag color="blue">{d.type}</Tag>
            </div>
            <div>
              <Button onClick={showModal}
                size="small" type="primary" ghost>
                APPLY
              </Button>
            </div>
          </Col>
        </Row>

        <Modal
          visible={visible}
          title="Apply for Job"
          onOk={handleOk}
          footer={
            <Button key="submit" type="primary" onClick={handleOk}>
              Submit
            </Button>}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </Card>
    ))
  )
}
function SideCardList() {
  return (
    <div style={{ width: '400px' }}>
      <GetData />

    </div>
  );
}

export default SideCardList;
