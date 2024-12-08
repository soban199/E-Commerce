import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo() {
  return (
    <div>
      <Link to="/" className="flex items-center justify-center">
            <img
              src="https://focusclothing.pk/cdn/shop/files/Focus_logo_men_1_150x.png?v=1704873328"
              alt="Logo"
              className="w-13 h-10"
            />
          </Link>
    </div>
  )
}
