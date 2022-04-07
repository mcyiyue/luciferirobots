import React from 'react';


class SearchBox extends React.Component{
       
    render(){
        return <input type='search' placeholder='Search Member' onChange={this.props.onSearchChange} />
    }
}

export default SearchBox;