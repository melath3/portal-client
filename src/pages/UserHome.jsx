import React from 'react'
import Header from '../components/Header';
import Navbar from '../components/navbar/Navbar';
import TaskList from '../components/TaskList';
import "../components/css/userHome.css";

const UserHome = () => {
  return (
    <div>
        
        {/* <Navbar/> */}
        <TaskList/>
       
    </div>
  )
}

export default UserHome;
