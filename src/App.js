import React from 'react';
import ShowLMemberCards from './ShowLMemberCards';

class App extends React.Component {
   
    render(){
        return (
            <>
                <div className='jumbotron text-center'>
                    <h1 className='display-4'>LUCIFERI ROBOTS</h1>
                </div>
                <ShowLMemberCards />
            </>
            
        )
    }  
}

export default App;