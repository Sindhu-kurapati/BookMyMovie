import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from 'react-bootstrap';
import {useNavigate } from 'react-router-dom';

//youtube
const MOVIE_API = 'https://api.themoviedb.org/3/discover/movie?api_key=fcdffb648581b9e03083fd089658d098';
const IMAGE_API = 'https://image.tmdb.org/t/p/w500';

const home = () => {
  const [movies,setMovies] = useState([]);
  const navigate = useNavigate();
  
 useEffect (() => {
  const user = localStorage.getItem('userEmail','userPassword');
  //not logged in
  if(!user){
    navigate('/login')
  }
 },[]);

  useEffect(()=>{
    axios.get(MOVIE_API).then((resp) =>{
      // console.log(resp.data.results)
      setMovies(resp.data.results)
    })
  },[]);

  const handleClick = (movie) => {
    navigate('/movie/'+movie.id, {state:movie});
  }

  return (
    <div style={{display:'flex',flexWrap:'wrap',width:'95%',margin:'1rem auto',height:'500px'}}>
      {movies.map((movie)=>{
        return(
          <div key={movie.id}>
            <Card onClick={() => handleClick(movie)} style={{width:'22rem',padding:'1.5rem',height:'560px',margin:'2.5rem', background:'linear-gradient(to bottom, white,#990033)',border:'1px solid black',borderRadius:10}}>
              <Card.Img className='card-style' variant="top" style={{width:'300px',height:'500px',border:'1px solid black',borderRadius:10}} src={IMAGE_API + movie.poster_path}/>
              <Card.Title style={{marginTop:'10px',height:220,textAlign:'center',color:'white',fontWeight:700,fontSize:25,borderRadius:10}}>{movie.title}</Card.Title>
            </Card>
          </div>
        )
      })}
    </div>
  )
}

export default home;