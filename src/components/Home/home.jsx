import React from 'react'
import './home.css'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import Img_1 from './Pic_1.jpeg';
import Img_2 from './Pic_2.jpeg';
import Img_3 from './Pic_3.jpeg';
import Img_4 from './Pic_4.jpeg';
import Img_5 from './MembersName.jpg';

export default function Home() {
  return (
    <div className='main'>
      <div className="nit-image">

      <img src='./R.png' alt='agartala'/>
      </div>


<div className="about SARC" style={{textAlign:'center',marginTop:'30px',marginBottom:'30px',padding:'20px'}}>
<h1 style={{marginBottom:'20px'}}>About SARC</h1>

<h style={{color:'#3aafa9',marginBottom:'30px'}}>Student Alumni Relation Cell</h>

  
<p style={{textAlign:'center',display:'flex',alignItems:'center'}}>Student Alumni Relation Cell (SARC) is a voluntary cell of IIT Guwahati under the office of Alumni Affairs and External Relations. It is operated by the students of IIT Guwahati under the Guidance of the Dean, Alumni Affairs, and External Relations. SARC acts as an engaging and mutually beneficial link between IIT Guwahati and its Alumni community.
The organization works toward creating a dynamic student alumni community with NIT Agartala dedicated to fostering relationships and strengthening ties between students and alumni to support NITA's SARC mission of offering top-notch education and opportunities while also making investments in the institution's future.
For achieving our well-specified and sophisticated vision, a plethora of activities have been undertaken to forge links and strengthen bonds between current students and alumni as well as amongst alumni.
</p>

</div>

<div className="alumniServices">
  <h1 className="alumniHeading">Alumni Services</h1>
  <p className="alumniText">

  We believe that every relationship is a two-way street. And the bond between alumni and the students of NITA is no different. We, as students of your alma mater, are always there to help you SAIL through any difficulties concerning NITA be it something major like the immediate Issuance of Original/Duplicate certificates, grade cards, the urgent requirement of Degree Transcripts, or minor ones like campus visits. We will make sure that those transcripts are made available to you in time. “Home is where our story begins…” and this is the place where you started from! And, we will ensure that you have a trouble-free stay at the NITA campus, your second home.
  </p>

<div className="boxes" style={{display:'flex',height:'5.4rem',width:'50%'}}>
<div className="box-1" style={{height:'4.4rem',border:'2px solid black',width:'50%',fontSize:'1.3rem',padding:'4px'}}>Procedure to get Transcript</div>
<div className="box-2" style={{height:'4.4rem',border:'2px solid black',width:'50%',fontSize:'1.3rem',padding:'4px'}}>Procedure to get Alumni Cards</div>

</div>
</div>

<div className="membersName" style={{ backgroundImage: `url(${Img_5})`,backgroundSize:'cover',marginTop:'20px',padding:'10px',backgroundColor: '#ddd' }} >

<Container fluid>
    <Row>
      <Col className='text-center py-3'>
      <h1 style={{color:'black'}}>Our Members</h1>
      </Col>
    </Row>
    <Row>

      <Col lg="3" md="6">
      
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Img_3} style={{ height: '235px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>Harish Sharan</Card.Title>
        <Card.Text>
        Executive : Assistant GS Alumni
        </Card.Text>
        <Button variant="primary">About</Button>
      </Card.Body>
    </Card>
      
      </Col>
      <Col lg="3" md="6">
      
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={Img_4} style={{ height: '235px', objectFit: 'cover' }} />
      <Card.Body>
        <Card.Title>Varun Srivastava</Card.Title>
        <Card.Text>
        Executive : Gen.Secretary Alumni
        </Card.Text>
        <Button variant="primary">About</Button>
      </Card.Body>
    </Card>      
      
      </Col>

      <Col lg="3" md="6">
      <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={Img_1} />
      <Card.Body>
    
        <Card.Title>Korlapati Gopi Krishna</Card.Title>
        <Card.Text>
          Member of the content team
        </Card.Text>
        <Button variant="primary">About</Button>
      </Card.Body>
    </Card>
      </Col>

      <Col lg="3" md="6">
      <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={Img_2} />
      <Card.Body>
        <Card.Title>Navanit Sharma</Card.Title>
        <Card.Text>
       Member of the technical team
        </Card.Text>
        <Button variant="primary">About</Button>
      </Card.Body>
    </Card>
      
      </Col>

      <Button variant="primary"  style={{ width: '110px', marginTop:'15px',height:'30px',display:'flex',alignItems:'center',marginLeft:'15px' }}>See More...</Button>

    </Row>
  </Container>
  
</div>

<div className="Events" style={{height:'30rem',padding:'10px',textAlign:'center',marginTop:'10px',marginBottom:'10px'}}>
<h2 style={{margin:'10px'}}>Events</h2>

<p>We are organizing many events to achieve a student alumni community, to help them benefit from each other.</p>


<div className="D-1" style={{height:'6rem',display:'flex',alignItems:'center',justifyContent:'center'}}>
<h4 style={{margin:'10px'}}>Alumni talk </h4>  
<div className="mike"style={{backgroundColor:'#3aafa9',height:'100px',width:'100px',fontSize:'2rem',color:'white',display:'flex',justifyContent:'center',alignItems:'center',margin:'10px',border:'2px solid black'}}><i class="fa-solid fa-microphone"></i></div>
<div className="mike"style={{backgroundColor:'#3aafa9',height:'100px',width:'100px',fontSize:'2rem',color:'white',display:'flex',justifyContent:'center',alignItems:'center',margin:'10px',border:'2px solid black'}}><i class="fa-solid fa-video"></i></div>
<h4 style={{margin:'10px'}}>Webinar </h4> 
</div>

<div className="D-1" style={{height:'6rem',display:'flex',alignItems:'center',justifyContent:'center'}}>
<h4 style={{marginLeft:'104px',marginRight:'10px'}}>Graduation Tea Party </h4>  
<div className="mike"style={{backgroundColor:'#3aafa9',height:'100px',width:'100px',fontSize:'2rem',color:'white',display:'flex',justifyContent:'center',alignItems:'center',margin:'10px',border:'2px solid black'}}><i class="fa-solid fa-mug-hot"></i></div>
<div className="mike"style={{backgroundColor:'#3aafa9',height:'100px',width:'100px',fontSize:'2rem',color:'white',display:'flex',justifyContent:'center',alignItems:'center',margin:'10px',border:'2px solid black'}}><i class="fa-solid fa-globe"></i></div>
<h4 style={{margin:'10px'}}>International Students' Day</h4> 
</div>

<div className="D-1" style={{height:'6rem',display:'flex',alignItems:'center',justifyContent:'center'}}>
<h4 style={{marginLeft:'104px',marginRight:'10px'}}>Finalis Resonare</h4>  
<div className="mike"style={{backgroundColor:'#3aafa9',height:'100px',width:'100px',fontSize:'2rem',color:'white',display:'flex',justifyContent:'center',alignItems:'center',margin:'10px',border:'2px solid black'}}><i class="fa-solid fa-people-group"></i></div>
<div className="mike"style={{backgroundColor:'#3aafa9',height:'100px',width:'100px',fontSize:'2rem',color:'white',display:'flex',justifyContent:'center',alignItems:'center',margin:'10px',border:'2px solid black'}}><i class="fa-solid fa-handshake"></i></div>
<h4 style={{margin:'10px'}}>Students' Alumni Meet </h4> 
</div>



</div>
</div>

  )
}
