import React from 'react'
import { Link } from 'react-router-dom';

const ErrorFallback = ({ error, resetBoundary }) => {
    return (
        <div className='error_fallback'>
          <p>Something went wrong:</p>
          <pre style={{ color: "red" }}>{error.message}</pre>
          <li>
              <Link to="/">Home</Link>
            </li>
          
        </div>
      );
}

export default ErrorFallback