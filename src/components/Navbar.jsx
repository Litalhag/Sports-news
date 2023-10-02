// Navbar.js
import React from 'react'
import { NavLink } from 'react-router-dom'
import { socialLinks, menuItems } from '../data'

function Navbar() {
  return (
    <nav id="main-nav">
      <div className="container">
        <img src="/img/logo.png" alt="NewsGrid" className="logo" />

        <div className="social">
          {socialLinks.map(({ id, href, icon }) => (
            <a key={id} href={href} target="_blank" rel="noopener noreferrer">
              <i className={`fab ${icon} fa-2x`} />
            </a>
          ))}
        </div>

        <ul>
          {menuItems.map(({ id, href, label }) => (
            <li key={id}>
              <NavLink
                to={href}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
