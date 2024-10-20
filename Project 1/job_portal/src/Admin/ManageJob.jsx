
import { Button, TextField, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import React from 'react'
import NavBar from './NavBar';

const Manage_job = () => {
  return (
    <div class="crocss">
      <NavBar />
      <br /><br />
      <h3>ADD JOBS</h3>
      <TextField
        required
        id="outlined-required"
        label="Job Title"
        variant="filled"
      ></TextField>
      &nbsp;&nbsp;&nbsp;

      <TextField
        required
        id="outlined-required"
        label="Description"
        variant="filled"
      ></TextField>
      <br /><br />

      <TextField
        required
        id="outlined-required"
        label="Requirements"
        variant="filled"
      ></TextField>&nbsp;&nbsp;&nbsp;


      <TextField
        required
        id="outlined-required"
        label="Location"
        variant="filled"
      ></TextField>
      <br /><br />

      <TextField
        required
        id="outlined-required"
        label="Salary"
        variant="filled"
      ></TextField> &nbsp;&nbsp;

      <FormControl variant="filled" required>
        <InputLabel> Job Type</InputLabel>
        <Select
          sx={{ width: "12ch" }}
          id="job-type"
          defaultValue="Full-Time"
        >
          <MenuItem value="Part-time">Part Time</MenuItem>
          <MenuItem value="Full-time">Full Time</MenuItem>
          <MenuItem value="both">Both</MenuItem>
        </Select>
      </FormControl>
      <br /><br />



      <Button variant="contained">Add</Button>  &nbsp;&nbsp;

      <Button variant="contained" >Reset</Button>
      <br /><br /><br />
    </div>
  )
}

export default Manage_job