import React from 'react';
import ScrollBox from './ScrollBox';


class ShowLMemberCards extends React.Component{

    render(){
        return(
            <>
             <ScrollBox>
                {this.props.user}
             </ScrollBox>
            </>   
        )
    }
}

export default ShowLMemberCards;