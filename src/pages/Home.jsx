import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Navbar from '../components/navbar/Navbar';
import "../components/css/home.css";
import TaskList from '../components/TaskList';

const Home = () => {
  return (
    <div>
      
      <Navbar/>
      <Header/>
      <TaskList/>
     
    </div>
  )
}

export default Home;
