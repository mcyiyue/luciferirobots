import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor() {
        super();
        this.state = {
            hasError: false
        }
    }

//catch an error if it happened
componentDidCatch(){
    this.setState({
        hasError: true
    })
}

    render() { 
        if (this.state.hasError)
        {
            return <h1>SOMETHING MUST BE WRONG!!!</h1>
        } else {
           return  this.props.children;
        }
    }
}
 
export default ErrorBoundary;
