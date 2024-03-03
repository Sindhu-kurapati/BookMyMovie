import {Navbar,Container} from 'react-bootstrap';
import Logo from './assets/Logo.png';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Home from './Components/home';
import MovieID from './Components/Movie';
import SelectSeat from './Components/SelectSeat';
import CheckOut from './Components/Checkout';
import { Button } from 'react-bootstrap';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Routes,Route } from 'react-router-dom';
// import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// const router = createBrowserRouter([
//   {
//     path:'/login',
//     element:<Login/>,
//   },
//   {
//     path:'/signup',
//     element:<SignUp/>,
//   },
//   {
//     path:'/home',
//     element:<Home/>,
//   },
//   {
//     path:'/movie/:id',
//     element:<MovieID/>,
//   },
//   {
//     path:'/select',
//     element:<SelectSeat/>,
//   },
//   {
//     path:'/checkout',
//     element:<CheckOut/>,
//   },
// ]);

function App() {

  const [user , setUser] = useState('');
  const navigate = useNavigate();

  useEffect(() =>{
    const userEmail = localStorage.getItem('userEmail');
    const userPassword = localStorage.getItem('userPassword');

     if(userEmail && userPassword){
      setUser(userEmail);
      setUser(userPassword);
    }
  },[user]);

  const handleLogout = () =>{
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userPassword');
    setUser(null);
    navigate('/')
  }


  return (
    <div style={{height:'100vh'}}>
      <Navbar bg='light' variant='light'>
        <Container style={{height:'6vh',margin:'0 40px'}}>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={Logo}
              width="30"
              height="45"
              className="d-inline-block align-top"
            />{' '}
            <i style={{color:'crimson',fontWeight:800,fontSize:'30px'}}>Book MyMovie</i>
          </Navbar.Brand>
          {user && <Button className='logout-btn' onClick={()=> {handleLogout()}}> Logout </Button>}
        </Container>
    </Navbar>

    <Routes>
    <Route path='/home' element={<Home/>} />
      <Route path='/' element={<Login setUser={setUser}/>}/>
      <Route path='/signup' element={<SignUp setUser={setUser}/>} />
      <Route path='/movie/:id' element={<MovieID/>} />
      <Route path='/select' element={<SelectSeat/>} />
      <Route path='/checkout' element={<CheckOut/>} />
    </Routes>

    {/* <RouterProvider router={router}></RouterProvider> */}
  </div>
  )
}

export default App;
