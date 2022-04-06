import React from 'react';


class LMember extends React.Component {

    constructor(){ //must initialize props in parameter to assign it in variable
        super();
        this.state  = {
            invertedValue: 1,
            seeRobot: 0,
            buttonText: 'See Robot Form'
        }
        
    }
    
    onButtonClick = () => {
        if (Boolean(parseInt(this.state.invertedValue))===true) {    
            this.setState({
                    invertedValue : 0,
                    seeRobot : 1,
                    buttonText: 'See Human Form'
                }
            );
        } else{
            this.setState({
                invertedValue : 1,
                seeRobot : 0,
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
                        <img src={this.setFilePath()} className='' alt='No Photos' onClick={this.onButtonClick}></img>
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