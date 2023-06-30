import React, { useEffect, useState } from 'react';
import { Button,  Form } from 'semantic-ui-react'
import axios from 'axios';
import {useNavigate } from 'react-router-dom';
import "../components/css/editform.css";
import {Config} from '../Config';




export default function Create() {
    const navigate = useNavigate();
    const [status, setStatus] = useState(undefined);


    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [username, setUsername] = useState('');
    const [id, setID] = useState(null);

useEffect(() => {
        setID(localStorage.getItem('ID'))
        setTitle(localStorage.getItem('Title'));
        setDesc(localStorage.getItem('Desc'));
        setUsername(localStorage.getItem('Username'))
}, []);
   
// const updateMethod = (id, data) =>{
//     return axios.put(`http://localhost:5000/api/tasks/${id}`, data);
//   }
    const updateData = () => {
        axios.put(`${Config.userUrl}/tasks/${id}`, {
            title,
            desc,
            username
        }).then(console.log('edit button clicked'))
        .then(() => {
            setStatus({ type: 'success' });
          })
          .catch((error) => {
            setStatus({ type: 'error', error });
          })
        .then(() => {
            navigate('/')
        })
       
            
    }

    return (
        <div className='formContainer'>
         <h1>Edit Tasks</h1>
            <Form className="create-form">
        
                <Form.Field>
                    <input placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <input placeholder='Desc' value={desc} onChange={(e) => setDesc(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <input placeholder='Username' value={username} onChange={(e) => setUsername(e.target.value)}/>
                </Form.Field>
                <Button onClick={updateData} type='submit' className='formButton'>Update</Button>
            </Form>
        </div>
    )
}