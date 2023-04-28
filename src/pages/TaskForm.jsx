import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../components/css/taskform.css";

export default function Create() {
  const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [username, setUsername] = useState('');
   

    const postData = () => {
        axios.post(`http://localhost:5000/api/tasks`, {
            title,
            desc,
            username
        })
        .then(() => {
          navigate('/')
      })
    }

    return (
        <div className='formContainer'>
          <h1>Create Tasks For  Volunteers</h1>
          <Form className="create-form">
                <Form.Field>
                    <input placeholder='title' onChange={(e) => setTitle(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <input placeholder='Desc' onChange={(e) => setDesc(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <input placeholder='Username' onChange={(e) => setUsername(e.target.value)}/>
                </Form.Field>
                <Button onClick={postData} type='submit' className='formButtonRed'>Submit</Button>
            </Form>
            </div>

   )
}

        
             
        
 