import { Button, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'
import { database } from '../firebase/setup'


function Todo() {

    const [task,setTask] = useState("")
    const [taskData,setTaskData] = useState([])

    const addTask = async()=>{
        const taskRef = collection(database,"Tasks")
        try{
            await addDoc(taskRef,{
                task:task
            })
            window.location.reload()
        }
        catch(err){
            console.error(err)
        }
    }

    const getTask = async()=>{
        const taskRef = collection(database,"Tasks")
        try{
           const data = await getDocs(taskRef)
           const filteredData = data.docs.map((doc)=>({
               ...doc.data(),
               id:doc.id
           }))
           setTaskData(filteredData)
        }catch(err){
            console.error(err)
        }
    }
    
    useEffect(()=>{
      getTask()
    },[])


    const updateTask = async(Id)=>{
        const taskDoc = doc(database,"Tasks",Id)
        try{
            await updateDoc(taskDoc,{
              task:task  
            })
            window.location.reload()
        }
      catch(err){
        console.error(err)
      }
    }

    const deleteTask = async(Id)=>{
        const taskDoc = doc(database,"Tasks",Id)
        try{
            await deleteDoc(taskDoc)
            window.location.reload()
        }catch(err){
            console.error(err)
        }
    }

  const {logout} = useAuth0()

  return (
    <div>
        <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} sx={{ml:"15px",mt:"15px"}} variant='contained'>Logout</Button>
        <div style={{position:"fixed",left:"40%",top:"30%"}}>
        <TextField variant='outlined' size='small' label="Task" onChange={(e)=> setTask(e.target.value)}/>
        <Button sx={{ml:"10px"}} variant='contained' size='medium' onClick={addTask}>Add</Button>
        {taskData.map((data)=>(
            <div >
            <li style={{marginTop:"30px"}}>{data.task}</li>
            <Button  size='small' variant='outlined' color="success" onClick={()=>updateTask(data.id)}>Update</Button>
            <Button size='small' variant='outlined' color="error" onClick={()=> deleteTask(data.id)}>Delete</Button>
            </div>
        ))}
        </div>  
    </div>
  )
}

export default Todo
