import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar'
import Footer from './Footer'

const Dashboard = () => {
  return (
    <>
    <Navbar/>
    
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Dashboard