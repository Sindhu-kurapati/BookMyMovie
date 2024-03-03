import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate} from 'react-router-dom';
import { Row, Col,Button,Card } from 'react-bootstrap';
import axios from 'axios';

const IMAGE_API = 'https://image.tmdb.org/t/p/w500';
const TIMINGS = ['10:30 AM',"03:00 PM", "06:00 PM","09:00 PM","12:00 AM"];


const Movie = () => {
     const location = useLocation();
     const {title,overview,poster_path} = location.state;
     const [latLng, setLatLng] = useState({});
     const [theatres,setTheatres] = useState([]);
     const navigate = useNavigate();
     
    useEffect(() => {
        if ('geolocation' in navigator) {
           navigator.geolocation.getCurrentPosition((position) => {
             setLatLng({
               lat: position.coords.latitude,
               lng: position.coords.longitude,
             });
           });
        }
    }, []);

    useEffect(() => {
        if (Object.keys(latLng).length > 0) {
           const GEO_API =  `https://api.geoapify.com/v2/places?categories=entertainment.cinema&filter=rect:${latLng.lng},${latLng.lat},78.41406763780981,17.404573630719536&limit=10&apiKey=8125ff70fecf4ed984528cef74740532`;
             axios.get(GEO_API).then((res) => {
             const featuresData = res.data.features;
             const names = [];
             featuresData.map((feature) => names.push(feature.properties.name));
             setTheatres(names);
             // console.log(res.data.features)
           });
         }
       }, [latLng]);
  return (
    <Row style={{margin:'15px'}}>
        <Col xs={5} style={{margin:'3rem'}}>
            <div style={{width:'100px'}}>
                <Card style={{width:'29rem',padding:25,height:'auto',margin:10, background:'linear-gradient(to bottom, white,#990033)',border:'1px solid black',borderRadius:10}}>
                    <Card.Img style={{margin:'auto',width:'350px',height:'450px',border:'1px solid black',borderRadius:10}} src={IMAGE_API+poster_path}/>
                    <Card.Title style={{marginBottom:'20px',height:'auto',textAlign:'center',color:'white',fontWeight:700,fontSize:25,borderRadius:10}}>{title}</Card.Title>
                    <Card.Text style={{color:'white',textAlign:'justify'}}>{overview}</Card.Text>
                </Card>
            </div>
        </Col>
        <Col xs={6}>
            <div style={{display:'flex',flexWrap:'wrap'}}>
                {theatres.map((theatre,index)=>{
                    return(
                        <div key={index} style={{marginBottom:20,background:'#f2f2f2',borderRadius:10,width:'800px' }}>
                            <h3 style={{ margin:'10px 1px 5px 25px', color:'#082363',fontWeight:700,fontSize:'1.4rem' }}>
                                {theatre}
                            </h3>
                            {TIMINGS.map((time)=>{
                                return <Button onClick={()=>{
                                    navigate('/select', {state: {title:title}})
                                }} 
                                style={{ margin:'10px 2rem',background:'#b3003b',color:'white',fontWeight:600,border:'none' }}
                                key={time}>{time}</Button>
                            })}
                        </div>
                    )
                })}
            </div>
        </Col>
    </Row>
    
  )
}
export default Movie;

