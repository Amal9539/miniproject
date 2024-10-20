import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Jobcard = ({title,salary,type,location}) => {
  return (
    
       <div className="border border-gray-300 shadow-md p-4 rounded-lg bg-white">
      
      <div className="text-xl font-bold">{title}</div> <br/>
      <div className="text-sm text-gray-500">{type}</div> <br/>
      <div className="text-sm text-gray-500">{location}</div> <br/>
      <div className="text-lg font-semibold">{salary}</div> <br/>
      <Link to="/ap">
      <Button className="apply button" variant="contained" >APPLY</Button></Link>
    </div>
    
  )
}

export default Jobcard