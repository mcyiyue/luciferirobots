import React from 'react';


class ShowLMemberCards extends React.Component{

    render(){
        return(
            <>
             <div className='container'>
                 <div className='row'>
                    {this.props.user}
                 </div>
            </div>
            </>   
        )
    }
}

export default ShowLMemberCards;