import '../App.css'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Layout, Col, Row} from 'antd';
import Header from '../components/header'
import SideCardList from '../components/sideCardList'
import ContentBoard from '../components/content'
const { Content, Footer} = Layout;

function ViewCompanyDetails() {
  return (
    <Layout className="layout">
      <Header />

      <Content style={{ background: '#E5E5E5' }}>
        <Row gutter={20}>
        <Col span={17}>
        <ContentBoard />     
        </Col>
        <Col span={3}>
        <SideCardList />    
        </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Startup Goa ©2020</Footer>
    </Layout>
  );
}

export default ViewCompanyDetails;
