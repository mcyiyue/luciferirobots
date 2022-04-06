import React from 'react';


class LMember extends React.Component {

    constructor(){ //must initialize props in parameter to assign it in variable
        super();
        this.state  = {
            seeRobot: 0,
            buttonText: 'See Robot Form'
        }
        
    }
    
    onButtonClick = (name) => {
        if (Boolean(parseInt(this.state.seeRobot))===true) {    
            this.setState({
                    seeRobot : 0,
                    buttonText: 'See Human Form'
                }
            );
        } else{
            this.setState({
                seeRobot : 1,
                buttonText: 'See Robot Form'
            });
        }
        
    }

    setFilePath(){
        if(Boolean(this.state.seeRobot)){
            return `https://robohash.org/${this.name}` //Set picture file path into robohash url if seeRobot value is 'true'
        } else {
            return `../img/${this.name}.jpg`; //Set picture file path into local image file if seeRobot value is not 'true'
        }
    }

    render(){
        this.name = this.props.memberData.name;
        this.title = this.props.memberData.title;
        return(
            <>  
                <div className='col'>
                    <div className='tag'>
                        <h6>{this.name}</h6>
                        <p>{this.title}</p>
                    </div>
                    <div>
                        <img src={this.setFilePath()} className='' alt='No Photos' number='23' onClick={() => this.onButtonClick(this.name)}></img>
                        <p>
                            <button className='btn btn-primary' onClick={this.onButtonClick}>{this.state.buttonText}</button>
                        </p>
                    </div>
                        
                </div>
            </>
        )         
    }
}

export default LMember