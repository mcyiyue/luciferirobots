import React from 'react';
import LMemberCard from './LMemberCard';

class ShowLMemberCards extends React.Component{

    mappingData(){
        const memberList = this.props.memberList.forEach((data) =>{
            console.log(data);
            return <LMemberCard  />
        })
        //console.log(this.props.memberList)
        return memberList;
    }
    render(){
        console.log(this.mappingData());
        return(
            <>{
                // {content}    
            }</>
        )
    }
}

export default ShowLMemberCards;
