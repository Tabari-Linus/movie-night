import React from 'react'
import './HomeScreen.css'
import NavBar from '../NavBar'
import Banner from '../Banner'
import requests from '../Requests'
import Row from '../Row'

const HomeScreen = () => {
  return (
    <div className='homeScreen'>
      <NavBar />
      <Banner />

      <Row 
      title="NETFLIX ORIGINALS" 
      fetchUrl ={requests.fetchNetflixOriginals}
      isLargeRow
      />
      <Row 
      title="Trending Now" 
      fetchUrl ={requests.fetchTrending}
      />
      <Row 
      title="Top Rated" 
      fetchUrl ={requests.fetchTopRated}
      />
      <Row 
      title="Action Movies" 
      fetchUrl ={requests.fetchActionMovies}
      />
      <Row 
      title="Comedy Movies" 
      fetchUrl ={requests.fetchComedyMovies}
      />
      <Row 
      title="Horror Movies" 
      fetchUrl ={requests.fetchHorroMovies}
      />
      <Row 
      title="Romance Movies" 
      fetchUrl ={requests.fetchRomanceMovies}
      />
      <Row 
      title="Documentaries" 
      fetchUrl ={requests.fetchDocumentory}
      />
    </div>
  )
}

export default HomeScreen
