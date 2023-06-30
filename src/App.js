import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Contact from "./pages/Contact";
import CreateTask from "./pages/CreateTask";
import TaskForm from "./pages/TaskForm";
import EditForm from "./pages/EditForm";
import Settings from "./pages/Settings";
import Single from "./pages/Single";
import UserHome from "./pages/UserHome";
import ManagerHome from "./pages/ManagerHome";
import "./app.css";


import { useContext, useEffect, useState } from "react";
import {Context} from "./context/Context";

import {BrowserRouter,Routes,Route,Link,Outlet, Navigate,} from "react-router-dom";



function App() {
  const {user} = useContext(Context);
//   // const isAuthenticated = localStorage.getItem("role");


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />

        <Route path="/user" element={user ?<UserHome/>:<Register />} />
       
        <Route path="/manager" element={user ?<ManagerHome/>:<Register />} />

        <Route path="/register" element={user ? <Home /> : <Register />} />
        <Route path="/login" element={user ? <Home /> : <Login />} />

        <Route path="/settings" element={user ? <Settings /> : <Register />} />

        <Route path="/about" element={ <About />} />
        <Route path="/contact" element={ <Contact />} />
        <Route path="/create" element={ <CreateTask/>} />
        <Route path="/createform" element={ <TaskForm/>} />
        <Route path="/editform" element={ <EditForm/>} />
        <Route path="/task/:taskId" element={<Single />} />



      </Routes>
  </BrowserRouter>
  );
}

export default App;
