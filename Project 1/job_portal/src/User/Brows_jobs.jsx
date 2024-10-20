import React from 'react'
import Jobcard from './Jobcard';
import Navbar from './Navbar';

const Brows_jobs = () => {
  const jobs = [
    {
      title: "Jr. Software Developer",
      salary: "₹8000 - ₹30000",
      type: "Full-time",
      location: "Location",
    },
    {
    title: "Jr. Software Developer",
      salary: "₹8000 - ₹30000",
      type: "Full-time",
      location: "Location",
    },
    {
      title: "Jr. Software Developer",
      salary: "₹8000 - ₹30000",
      type: "Full-time",
      location: "Location",
    },
    {
      title: "Jr. Software Developer",
      salary: "₹8000 - ₹30000",
      type: "Full-time",
      location: "Location",
    },
    {
      title: "Jr. Software Developer",
      salary: "₹8000 - ₹30000",
      type: "Full-time",
      location: "Location",
    },
    {
    title: "Jr. Software Developer",
      salary: "₹8000 - ₹30000",
      type: "Full-time",
      location: "Location",
    },
    {
      title: "Jr. Software Developer",
      salary: "₹8000 - ₹30000",
      type: "Full-time",
      location: "Location",
    },
    {
      title: "Jr. Software Developer",
      salary: "₹8000 - ₹30000",
      type: "Full-time",
      location: "Location",
    },
    {
      title: "Jr. Software Developer",
      salary: "₹8000 - ₹30000",
      type: "Full-time",
      location: "Location",
    },
    {
    title: "Jr. Software Developer",
      salary: "₹8000 - ₹30000",
      type: "Full-time",
      location: "Location",
    },
    {
      title: "Jr. Software Developer",
      salary: "₹8000 - ₹30000",
      type: "Full-time",
      location: "Location",
    },
    {
      title: "Jr. Software Developer",
      salary: "₹8000 - ₹3000",
      type: "Full-time",
      location: "Location",
    }
  
  ];
    return (
      
      // <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      <div className='gridcontainer'>
          {jobs.map((job, index) => (
            <div className='card'>
            <Jobcard
              key={index}
              title={job.title}
              salary={job.salary}
              type={job.type}
              location={job.location}
            />
            </div>
          ))}
        </div> 
    
  );
// }
<>
<Navbar/></>
}
export default Brows_jobs