import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <footer>
        <div className="container">
            <p>&copy;Ecommercestore 2019 - {new Date().getFullYear()} </p>
        </div>
    </footer>
  )
}

export default Footer