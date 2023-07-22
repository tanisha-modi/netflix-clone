import React from 'react';
import "./HomeScreen.css";
import Nav from '../Components/Nav';
import Banner from '../Components/Banner';
import Row from '../Components/Row'
import request from '../requests'

function HomeScreen() {
  return (
    <div className='homescreen'>
      <Nav/>
      <Banner/>

      <Row 
      title="NETFLIX ORIGINALS" 
      fetchUrl={request.fetchNetflixOriginals} 
      isLargeRow = {true}
      />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      {/* <Row title="Top Rated" fetchUrl={request.fetchTopRated} /> */}
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Documentries" fetchUrl={request.fetchDocumentaries} />
    </div>
  )
}

export default HomeScreen;
