import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/navbar/Navbar';
import "../components/css/home.css";
import TaskList from '../components/TaskList';
import Slider from '../components/Slider';
import Frontpage from '../components/Frontpage';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className='home'>
      
      <Navbar/>
      {/* <Slider/>  */}
       <Header/>
      {/* <Footer/> */}

     
     
    </div>
  )
}

export default Home;
