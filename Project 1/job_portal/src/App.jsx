import { useState } from 'react'
import './App.css'
import Home from './Component/Home'
import Signup from './Component/Signup'
import { Route, Routes } from 'react-router-dom'
import Login from './Component/Login'

import Brows_jobs from './User/Brows_jobs'
import Dashboard from './User/Dashboard'
import Applied_jobs from './User/Applied_jobs'
import Update_Profile from './User/Update_Profile'
import Admin_dashboard from './Admin/Admin_dashboard'
import ManageJob from './Admin/ManageJob'
import Jobcard from './User/Jobcard'
import AdminSignup from './Admin/AdminSignup'
import AdminLogin from "./Admin/AdminLogin"

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin-signup" element={<AdminSignup />} />
      <Route path="/admin-login" element={<AdminLogin />} />
      <Route path="/brows" element={<Brows_jobs />} />
      <Route path="/bj" element={<Brows_jobs />} />
      <Route path="/db" element={<Dashboard />} />
      <Route path="/ap" element={<Applied_jobs />} />
      <Route path="/update/profile" element={<Update_Profile />} />
      <Route path="/jc" element={<Jobcard />} />
      <Route path="/ad" element={<Admin_dashboard />} />
      <Route path="/mj" element={<ManageJob />} />
    </Routes>
  )
}

export default App
