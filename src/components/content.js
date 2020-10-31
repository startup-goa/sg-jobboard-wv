import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Col, Card,  Image } from 'antd';
import StartupGoaLogo from '../assets/StartupGoaLogo.png'

let data = {
  company_name: 'Numadic',
  catergory: 'Fullstack developer',
  type: 'Full time',
  location: 'Panjim, GA',
  desc:'We are looking for a frontend React Redux Developer to build out some simple components. This is a perfect opportunity for someone with little to no work experience, but who is willing to learn and would like to get their feet wet in a startup environment.'
}


function GetContent() {
  return (
    
      <Card
        style={{ marginTop: 8, marginLeft: 5, paddingBottom:500 }}
        type="inner"
      >
          <Col className="gutter-row">
          <Image
          width={100}
          src={StartupGoaLogo}
        />
            <div style={{ fontWeight: 600, fontSize: 18 }}>
              {data.catergory}
            </div>
            <div style={{ fontSize: 14 }}>
              {data.company_name}
            </div>
            <div style={{ fontSize: 14 }}>
              {data.location}
            </div>
            <div style={{ fontSize: 14 }}>
              {data.desc}
            </div>
          </Col>

      </Card>
   
  )
}
function ContentBoard() {
  return (
    <div style={{ marginLeft:5,width: 1000}}>
      <GetContent />
    </div>
  );
}

export default ContentBoard;
