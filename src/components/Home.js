import { Button } from '@mui/material'
import React from 'react'
import man from "../images/man.png"
import exercise from "../images/exercise.png"
import { useAuth0 } from '@auth0/auth0-react'
import { Link } from 'react-router-dom'

function Home() {

  const { loginWithRedirect,isAuthenticated } = useAuth0();


  return (
    <div style={{position:"fixed",left:"30%",top:"25%"}}>
        <img style={{width:"200px",height:"300px"}} src={man}/>
      {isAuthenticated ? <Link to="/todo" style={{textDecoration:"none",color:"white",backgroundColor:"#45ACFC",borderRadius:"5px",padding:"10px"}}>Start free</Link> :
       <Button onClick={()=> loginWithRedirect()} size='medium' variant='contained'>Signup</Button>}
      
      <img style={{width:"200px",height:"300px"}} src={exercise}/>
      <h2 style={{color:"grey",marginLeft:"20px"}}>It's the time organize your work and lifestyle</h2>
    </div>
  )
}

export default Home
