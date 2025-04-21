import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../NavBar/Navbar'
import Footer from '../Footer/Footer'
export default function Layout() {
  return<>
<Navbar />
  <Outlet></Outlet>
<Footer />
  </>
}
