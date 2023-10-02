import React from 'react'
import { siteLinks } from '../data'

const FooterLinks = () => {
  return (
    <ul className="list">
      {siteLinks.map((link) => (
        <li key={link.id}>
          <a href="#">{link.text}</a>
        </li>
      ))}
    </ul>
  )
}

export default FooterLinks
