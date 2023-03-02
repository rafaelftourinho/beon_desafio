import React from "react"
import { Outlet } from "react-router-dom"
import FilterYear from "./components/FilterYear"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App">
      <Navbar />
      <FilterYear />
      <div className="container">
        <Outlet />
      </div>
    </div>
  )
}

export default App
