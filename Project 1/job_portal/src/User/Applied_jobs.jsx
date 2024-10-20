import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React from 'react'
import Navbar from './Navbar'

const Appiled_job = () => {
  return (
    <div>
      <Navbar /><br/><br/>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table" >
        <TableHead>
          <TableRow>
          <TableCell>Sno</TableCell>
          <TableCell>Name</TableCell>
          <TableCell>Ph :</TableCell>
          <TableCell>Email Id</TableCell>
          <TableCell>Job</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
          <TableCell>1</TableCell>
          <TableCell>adhil</TableCell>
          <TableCell>856496464</TableCell>
          <TableCell>adyg@kkpk</TableCell>
          <TableCell>HR</TableCell>
          <TableCell><Button>Remove</Button></TableCell>
          
          
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  )
}

export default Appiled_job