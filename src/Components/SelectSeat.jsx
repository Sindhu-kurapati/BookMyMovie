import React, { useEffect, useState } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';
import { Row, Col, Button } from 'react-bootstrap';

const SelectSeat = () => {
  const location = useLocation();
  const {title} = location.state;
  const navigate = useNavigate();
  const [seatsMatrix,setSeatsMatrix] = useState([]);
  const [selectedSeats, setSelectedSeats]=useState([]);
  const createSeats = () => {
    let totalRows = 10;
    let numberOfSeatsInaRow = 10;
    let tempSeats = [];
    let row = 0;
    let ch = 'A';
    while(row < totalRows){
      let col = 1;
      let rowArr = [];
      while(col <= numberOfSeatsInaRow){
        rowArr.push(ch+col);
        col++;
      }
      tempSeats.push(rowArr);
      row++;
      ch = String.fromCharCode(ch.charCodeAt(0) + 1);//increment the letter A,B,c......
    }
    // console.log(tempSeats);
    setSeatsMatrix(tempSeats);
  }

  useEffect(() => {
    createSeats();
  },[])

  const handleSelect = (newSeat) =>{
    setSelectedSeats([...selectedSeats, newSeat]);
  }
  return (
    <div style={{margin:'1rem 7rem'}}>
      <h3 className='d-inline-block' style={{color:'teal'}}>{title}</h3>
      <div className='d-inline-block' style={{marginLeft:'30rem'}}>
        <h5>Screen this side →</h5>
      </div>
      <div style={{margin:'2px'}}>
        {
          seatsMatrix.map((seatsArr,index)=>{
            return(
              <Row key={index}>
              {seatsArr.map((seat,index) => {
                let isSelected = selectedSeats.indexOf(seat) > -1;
                return (
                <Col key={index} style={{margin:'10px'}}>
                  <Button style={{backgroundColor: isSelected ? 'crimson' : '#ffcccc', border:isSelected ? '2px solid black': 'none', color:isSelected ? 'white' : 'black',fontWeight:700}} onClick={() => handleSelect(seat)}>{seat}</Button>
                </Col>
                )
              })}
              </Row>
            )
          })
        }
      </div>
      <div>
        {
          selectedSeats.length > 0 ? 
          <div style={{fontSize:'1.4rem',fontWeight:600}}>Seats Selected : 
            {selectedSeats.map((seat,index) => {
              return <span key={index} style={{color:'crimson',fontWeight:700}}>  {seat}</span>
            })} 
            <div>
              <h4 style={{color:'teal'}}>Total: Rs.{selectedSeats.length * 200}</h4>
              <Button 
              style={{background:'crimson',border:'none',fontWeight:700}}
              onClick={()=>{
                navigate('/checkout')
              }}>
                Check Out
              </Button>
            </div>
          </div> : 
          <div><h5 style={{color:'teal',marginTop:'15px',fontSize:'1.4rem',fontWeight:700}}>No Seats selected </h5></div>
        }
      </div>
    </div>
  )
}

export default SelectSeat;