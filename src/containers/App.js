import React from 'react';
import SearchBox from '../components/SearchBox';
import ShowLMemberCards from '../components/ShowLMemberCards';
import LMemberCard from './LMemberCard';
import {LMemberData} from '../LMemberData';
import ErrorBoundary from '../components/ErrorBoundary';

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
                    <h1 className='display-4'>LUCIFERI <span className='contrast-title'>ROBOTS</span></h1>
                </div>
                <div className='d-flex justify-content-center search-bar'>
                    <SearchBox onSearchChange={this.onSearchChange} className='align-self-center' />
                </div>
                <div className='container main-frame' style={{overflowY: 'scroll', border: '1px solid black', height: '700px'}}>
                    <ErrorBoundary>
                        <ShowLMemberCards user={this.mappingData()} />
                    </ErrorBoundary>
                </div>
            </>
            
        )
    }  
}

export default App;