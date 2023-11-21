import React from 'react'
import Header from './mainComp/Header/Header'
import Footer from './mainComp/Footer/Footer'

import { Outlet } from 'react-router'

function Layout() {
  return (
    <div>
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Layout
