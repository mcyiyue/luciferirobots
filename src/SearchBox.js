import React from 'react';


class SearchBox extends React.Component{
       
    render(){
        return <input type='search' placeholder='Search Member Name Here' onChange={this.props.onSearchChange} />
    }
}

export default SearchBox;