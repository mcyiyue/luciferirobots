import React from 'react';


class LMember extends React.Component {

    constructor(props){ //must initialize props in parameter to assign it in variable
        super();
        this.state  = {
            invertedValue: 1,
            seeRobot: 0,
            buttonText: 'See Robot Form'
        }
        this.name = props.memberData.name;
        this.title = props.memberData.title;
        
    }
    
    onButtonClick = (event) => {
        
        if (Boolean(parseInt(event.target.value))===true) {    
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
        console.log(this.props.memberData);
        if(Boolean(this.state.seeRobot)){
            return `https://robohash.org/${this.name}` //Set picture file path into robohash url if seeRobot value is 'true'
        } else {
            return `../img/${this.name}.jpg`; //Set picture file path into local image file if seeRobot value is not 'true'
        }
    }

    render(){
        
        return(
            <>  
                <div className='col'>
                    <div className='tag'>
                        <h6>{this.name}</h6>
                        <p>{this.title}</p>
                    </div>
                    <div>
                        <img src={this.setFilePath()} className='' alt='No Photos'></img>
                        <p>
                            <button className='btn btn-primary' value={this.state.invertedValue} onClick={this.onButtonClick}>{this.state.buttonText}</button>
                        </p>
                    </div>
                        
                </div>
            </>
        )         
    }
}

export default LMember