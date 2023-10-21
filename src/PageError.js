import React from 'react'
import { Link } from 'react-router-dom';
const PageError = () => {
  return (
    <div className='error_page'>
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>
          We are sorry, the page you are looking for does not exist. Please go back to the previous page.
        </p>
        <Link to="/">Go Back</Link>
    </div>
  )
}

export default PageError