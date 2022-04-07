import React from 'react';


class LMember extends React.Component {

    constructor(){ //must initialize props in parameter to assign it in variable
        super();
        this.state  = {
            seeRobot: 0,
            buttonText: 'See Robot Form'
        }
        
    }
    
    onButtonClick = () => {
        if (Boolean(this.state.seeRobot)) {    
            this.setState({
                    seeRobot : 0,
                    buttonText: 'See Robot Form'
                }
            );
        } else{
            this.setState({
                seeRobot : 1,
                buttonText: 'See Human Form'
            });
        }
        
    }

    setFilePath(name){
        if(Boolean(this.state.seeRobot)){
            return `https://robohash.org/${name}` //Set picture file path into robohash url if seeRobot value is 'true'
        } else {
            return `../img/${name}.jpg`; //Set picture file path into local image file if seeRobot value is not 'true'
        }
    }

    render(){
        const {name, title} = this.props.memberData; //create variable name and title from object props memberdata
        const {buttonText} = this.state;
        return(
            <>  
                <div className='col'>
                    <div className='tag'>
                        <h6>{name}</h6>
                        <p>{title}</p>
                    </div>
                    <div>
                        <img src={this.setFilePath(name)} className='' alt='No Photos' onClick={this.onButtonClick}></img>
                        <p>
                            <button className='btn btn-primary' onClick={this.onButtonClick}>{buttonText}</button>
                        </p>
                    </div>
                        
                </div>
            </>
        )         
    }
}

export default LMember