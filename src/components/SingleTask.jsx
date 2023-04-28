import axios from "axios";
import { useEffect, useState, useContext  } from "react";
import { useLocation } from "react-router";
import {Link} from "react-router-dom";
import { Context } from "../context/Context";
import "./css/singletask.css";


export default function SingleTask() {
  const location =useLocation();
  const path = location.pathname.split("/")[2];
  const [task, setTask] = useState({})
  const PF = "http://localhost:5000/images/";
  const {user} = useContext(Context);
  const [title,setTitle] = useState("")
  const [desc,setDesc] = useState("")
  const [updateMode,setUpdateMode] = useState(false)



  

    useEffect(() => {
      const getTask = async () =>{
        const res =await axios.get("http://localhost:5000/api/tasks/" + path);
        setTask(res.data);
        setTitle(res.data.title);
        setDesc(res.data.desc);
      };
      getTask()
    }, [path]);
    const handleDelete = async()=>{
      try{
      await axios.delete(`http://localhost:5000/api/tasks/${task._id}`, {
        data: {username:user.username},
      });
      
      setUpdateMode(false)
      }catch(err){}
    };

  const handleUpdate = async ()=>{
    try{
      await axios.put(`http://localhost:5000/api/tasks/${task._id}`, {
        username:user.username, 
        title,
        desc,
      });
      window.location.reload();
      }catch(err){}
  };

  return (
    <div className="singlePost">
       <div className="singlePostWrapper">
         {task.photo &&
         <img className="singlePostImg"
         src={PF + task.photo} 
         alt=""  
         />
         }{updateMode ? (
         <input 
            type="text" 
            value={title} 
            className="singlePostTitleInput"
            autoFocus 
            onChange={(e)=>setTitle(e.target.value)}
            />
           ) : (
          <h1 className="singlePostTitle">
               {title}  
               {task.username === user?.username &&(
                <div className="singlePostEdit">
                  <i className="singlePostIcon fa-regular fa-pen-to-square" onClick={()=>setUpdateMode(true)}></i>
                  <i className="singlePostIcon fa-regular fa-trash-can" onClick={handleDelete}></i>
                </div>
               )}
            </h1>
           )}
            <div className="singlePostInfo">
                <span className="singlePostDate">
                    Author:
                    <Link to={`/?user=${task.username}`} className="link">
                    <b>{task.username}</b>
                    </Link>
                    
                </span>
                <span className="singlePostDate">{new Date(task.createdAt).toDateString}</span>
            </div>
            {updateMode ? (
              <textarea 
                className="singlePostDescInput" 
                value={desc} 
                onChange={(e)=>setDesc(e.target.value)}/>
            ):(           
               <p className="singlePostDesc">{desc}</p>
            )}
            {updateMode && (
            
            <button className="singlePostButton" onClick={handleUpdate}>
              update
              </button>
            )}
       </div>
      
    </div>
  );
}
