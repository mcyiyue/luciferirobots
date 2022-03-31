import React from 'react';
import LMemberCard from './LMemberCard';

class ShowLMemberCards extends React.Component{

    mappingData(){
        const memberList = this.props.memberList.map((data, i) => { //Map member data in props array into memberList Variable
            return <LMemberCard  memberData={data} key={i}/>  //Return component to show member card for each array
        })
        return memberList; //Return memberList variable
        
    }
    render(){
        return(
            <>
            <div className='jumbotron text-center'>
                <h1>LUCIFERI ROBOTS</h1>
            </div>
             <div className='container'>
                 <div className='row'>
                    {this.mappingData()}
                 </div>
            </div>
            </>   
        )
    }
}

export default ShowLMemberCards;