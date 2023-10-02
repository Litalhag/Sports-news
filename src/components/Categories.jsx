import React from 'react'
import { Link } from 'react-router-dom'
import { list } from '../data'

const Categories = () => {
  return (
    <aside id="categories" className="card">
      <h2>Categories</h2>
      <ul className="list">
        {list.map(({ id, name }) => (
          <li key={id}>
            <Link to={`/${name.toLowerCase()}`}>
              <i className="fas fa-chevron-right" /> {name}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  )
}

export default Categories
