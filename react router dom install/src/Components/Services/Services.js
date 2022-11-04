import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Services() {
  return (
    <div>
        <h1>Les Services</h1>
        <nav>
          <Link to="/Services/developpement" >Développement</Link>
          <Link to="/Services/cybersecurite">Cyber Sécrité</Link>
        </nav>
        <Outlet></Outlet>
    </div>
  )
}
