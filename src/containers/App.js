import React from 'react';
import SearchBox from '../components/SearchBox';
import ShowLMemberCards from '../components/ShowLMemberCards';
import LMemberCard from './LMemberCard';
import {LMemberData} from '../LMemberData';

class App extends React.Component {
    constructor(){
        super();
        this.state = {
            searchText: '',
        }
    }

    mappingData = () => {
        // console.log(this.filterMember());
        const memberList = this.filterMember().map((data, i) => { //Map member data in props array into memberList Variable
            return <LMemberCard  memberData={data} key={i}/>  //Return component to show member card for each array
        })
        
        return memberList; //Return memberList variable
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

    render(){
        return (
            <>
                <div className='jumbotron text-center'>
                    <h1 className='display-4'>LUCIFERI ROBOTS</h1>
                </div>
                <div className='d-flex justify-content-center search-bar'>
                    <SearchBox onSearchChange={this.onSearchChange} className='align-self-center' />
                </div>
                <ShowLMemberCards user={this.mappingData()} />
            </>
            
        )
    }  
}

export default App;