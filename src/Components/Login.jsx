import React, {useState} from 'react';
import { Row,Col,Button,Form,Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import ShowTime from '../assets/ShowTime.png';

const Login = ({setUser}) => {

    const navigate = useNavigate();
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');

    const handSumbit =() => {
      
      if(email == '' || password == ''){
        alert('Enter the Required fields');
      }
      else{
        setUser(email);
        setUser(password);
        navigate('/home');
        localStorage.setItem('userEmail' , email);
        localStorage.setItem('userPassword' , password);
      }
      
    };

return (
<div className='auth-container'>
    <Row>
        <Col className='auth-inner-container'>
            <img src={ShowTime} width={450} height={440} style={{margin:20}}/>
            <h1 style={{color:'crimson',fontWeight:700}}>BOOK TICKETS & EARN <br/><i style={{margin:'1px 10px',color:'black'}}>CASHBACK POINTS !</i></h1>
        </Col>
        <Col className='auth-inner-container'>
            <Card style={{ width: '30rem',height:'28rem',borderRadius:'20px',background:'#ffe6ff' }}>
                <Card.Body>
                    <Form style={{margin:40}}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email Address</Form.Label>
                            <Form.Control onChange={(e) => setEmail(e.target.value)} 
                                value={email}
                            style={{border:'2px solid grey'}} type="email" placeholder="Enter email"/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control onChange={(e) => setPassword(e.target.value)} 
                                value={password}
                            style={{border:'2px solid grey'}} type="password" placeholder="Password" />
                        </Form.Group>

                        <Button onClick={()=>handSumbit()}  variant="primary" type="submit" className='login-btn'>
                            Login
                        </Button>
                    </Form>
                    <div style={{margin:'1rem 6rem'}}>
                        <h5>New To <i style={{color:'crimson',fontWeight:700}}>Book MyMovie</i></h5>
                        <h5 style={{marginTop:'10px'}}>Then Click here,<Card.Link href="/signup">To Sign Up</Card.Link></h5>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    </Row>    
</div>
  )
}

export default Login;
