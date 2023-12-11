import { Link, Outlet } from 'react-router-dom'
import React from 'react'

function Home() {
  return (
    <div>
      Home
      <div>
        <Link to="/dashboard">Dashboard</Link>
      </div>
      <Outlet />
    </div>
  )
}

export default Home
