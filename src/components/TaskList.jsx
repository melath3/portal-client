import React, { useEffect, useState } from 'react'
import {DataGrid, GridBody}  from "@mui/x-data-grid";
import axios from 'axios';
import styled from "styled-components";
import { Link } from 'react-router-dom';
import { StepTitle } from 'semantic-ui-react';
import Button from '@mui/material/Button';
import {useNavigate } from 'react-router';
import  EditForm from '../pages/EditForm'
import {Config} from '../Config';







const TaskList = () => {
    const [tableData, setTableData] = useState([]);
    let history = useNavigate();
    

    const setData = (data) => {
      let { _id, title, desc, username } = data;
      localStorage.setItem('ID', _id);
      localStorage.setItem('Title', title);
      localStorage.setItem('Desc', desc);
      localStorage.setItem('Username', username)
}
    
   
    
    useEffect(() => {
      axios.get(`${Config.userUrl}/tasks`)
          .then((response) => {
              setTableData(response.data);
          })
  }, [])

  const getData = (id) => {
    axios.get(`${Config.userUrl}/tasks`)
        .then((getData) => {
             setTableData(getData.data);
         })
}


  const onDelete = (id) => {
    axios.delete(`${Config.userUrl}/tasks/${id}`)
 .then(() => {
    getData();
})
}
  

    const EditButton = styled.div`
  padding: 2px 5px;
  border-radius: 5px;
  color: darkgreen;
  border: 1px dotted rgba(0, 0, 139, 0.596);
  cursor: pointer;
  `
  const DeleteButton = styled.div`
  padding: 2px 5px;
  border-radius: 5px;
  color: crimson;
  border: 1px dotted rgba(220, 20, 60, 0.6);
  cursor: pointer;
  `
  const CellAction = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  `

    const columns = [
        { field: '_id', headerName: 'Id', width: 300 },
        { field: 'title', headerName: 'Title', width: 200},
        { field: 'desc', headerName: 'Desc', width: 200 },
        { field: 'username', headerName: 'Username', width: 150 },
        { field: 'createdAt', headerName: 'createdAt', width: 150 },
        { field: 'updatedAt', headerName: 'updatedAt', width: 150 },

        {
          field: "action",
          headerName: "Action",
          width: 200,
          renderCell: (params) => {
            return (
              <CellAction className="cellAction">
                <Link to='/editform'>
                     <EditButton onClick={() => setData(params.row)}>Edit </EditButton>
                     </Link>
                     <DeleteButton onClick={() => onDelete(params.id)} >Delete</DeleteButton>  
                     
              </CellAction>
            );
          },
        },

    ]

  return (
<div>

<Link to='/createform'>
    <Button style={{ margin: '10px' }}  variant="contained">New Task</Button>
</Link>
    <div style={{ height: 700, width: '100%' }}>
      <DataGrid
        rows={tableData}
        columns={columns}
        getRowId={(row) =>  row._id}
      />
    </div>
    </div>
  )
}

export default TaskList