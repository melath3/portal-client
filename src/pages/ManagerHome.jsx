import React, { useEffect, useState } from 'react'
import TaskList from '../components/TaskList';
import Header from '../components/Header';
import Navbar from '../components/navbar/Navbar';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Tasks from "../components/Tasks";
import "../components/css/managerHome.css";
import {Config} from '../Config';



const ManagerHome = () => {
  const [tasks,setTasks] = useState([]);
  const {search} =useLocation();

  useEffect(()=>{
    const fetchTasks = async ()=>{
     const res = await axios.get(`${Config.userUrl}/tasks` + search)
     setTasks(res.data)
    }
    fetchTasks()
  },[search])

  return (
    <div>
        
        
        {/* <Navbar/> */}
        <div className='managerHome'>
        <Tasks tasks={tasks}/>
        </div>
        
    </div>
  )
}

export default ManagerHome;
