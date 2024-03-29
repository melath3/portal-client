import {useState, useContext } from "react";
import React from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import "../components/css/createtask.css";
import { Context } from "../context/Context";
import  axios from "axios";
import {Config} from '../Config';


export default function CreateTask() {
  const [title,setTitle] = useState("");
  const [desc,setDesc] = useState("");
  const [file,setFile] = useState(null);
  const {user} = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username:user.username,
      title,
      desc
    };
    if(file){
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name",filename);
      data.append("file",file);
      newPost.photo = filename;
      try{
        await axios.post(`${Config.userUrl}/upload`,data);

      }catch(err){}
    }
    try{

    const res= await axios.post(`${Config.userUrl}/tasks`, newPost);
    window.location.replace("/task/" + res.data._id);
    
    }catch (err){}
  };

    return (
      <div className="write">
      {file && (
        <img className="writeImg" 
        src={URL.createObjectURL(file)}
         alt=""
          />
          )}
      <form className="writeForm" onSubmit={handleSubmit}>
          <div className="writeFormGroup">
              <label htmlFor="fileInput">
              <i className="writeIcon fa-solid fa-plus" style={{"color": "rgb(25, 40, 87)"}}></i>
              </label>
              <input
                type="file" 
                id="fileInput" 
                style={{display:"none"}} 
                onChange={(e)=>setFile(e.target.files[0])} 
                />
              <input
                type="text" 
                placeholder="Title" 
                className="writeInput" 
                autoFocus={true} 
                onChange={(e)=>setTitle(e.target.value)}
                />
         </div>
        <div className="writeFormGroup">
            <textarea 
              placeholder="write task description"
              type="text" 
              className="writeInput writeText" 
              onChange={(e)=>setDesc(e.target.value)}

            ></textarea>
        </div>
        <button className="writeSubmit" type ="submit">Submit

        </button>
      </form>
    </div>

   )
}

        
             
        
 