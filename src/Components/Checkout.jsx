import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useNavigate} from 'react-router-dom';
import PopCorn from '../assets/PopCorn.png';
import QRcode from '../assets/QR.png';

const Checkout = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Row style={{margin:'2rem'}}>
        <Col>
        <div style={{height:'85\vh',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:"center"}}>
            <img src={PopCorn} height={370} width={430}/>
            <div style={{margin:'1rem 8rem 1rem 1rem'}}>
                <h3 style={{color:'teal',fontWeight:'700'}}>Tickets Confirmed !</h3>
                <h1 style={{color:'crimson',fontWeight:'700'}}>Enjoy Your Movie</h1>
            </div>
        </div>  
        </Col>
        <Col style={{background:'#e6ccff',borderRadius:'50%',display:'flex',justifyContent:'center',alignItems:'center'}}>
          <div>
            <img 
              onClick={()=>{
              navigate('/success')
            }} src={QRcode} height={300}/>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default Checkout;
