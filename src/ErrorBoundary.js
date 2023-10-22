import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class ErrorBoundary extends Component {

    // constructor(props) {
    //     super(props)
    
    //     this.state = {
    //          hasError: false
    //     }
    // }

    state = {
        hasError: false
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true
        }
    }

    componentDidCatch(error, info) {
        console.log(error)
        console.log(info)
    }
  render() {
    if (this.state.hasError) {
        return <><h1 className='error_message'>Something went wrong</h1><Link to="/">Home</Link></>
       // return this.props.fallback;
    }
    return this.props.children
  }
}

export default ErrorBoundary