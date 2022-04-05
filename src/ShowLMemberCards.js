import React from 'react';
import LMemberCard from './LMemberCard';
import {LMemberData} from './LMemberData';
import SearchBox from './SearchBox';

class ShowLMemberCards extends React.Component{

    constructor(){
        super();
        this.state = {
            searchText: '',
        }
    }

    onSearchChange = (event) => {
        this.setState(
            {
                searchText: event.target.value

            }
        )
        console.log(event.target.value)
    }


    filterMember = () => {
        return (LMemberData.filter(data => {
            return data.name.toLowerCase().includes(this.state.searchText.toString().toLowerCase()) //Return filtered data based on searchBox
        }))
    }

    mappingData(){
        // console.log(this.filterMember());
        const memberList = this.filterMember().map((data, i) => { //Map member data in props array into memberList Variable
            return <LMemberCard  memberData={data} key={i}/>  //Return component to show member card for each array
        })
        console.log('MemberList',memberList);
        return memberList; //Return memberList variable
    }
    render(){
        return(
            <>
              <div className='d-flex justify-content-center search-bar'>
                 <SearchBox onSearchChange={this.onSearchChange} className='align-self-center' />
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