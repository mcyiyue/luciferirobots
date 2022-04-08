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
            //Set picture file path into robohash url if seeRobot value is 'true'
            return `https://robohash.org/${name}`
        } else {
            //Set picture file path into local image file in public folder if seeRobot value is not 'true'
            return `${process.env.PUBLIC_URL}/img/${name}.jpg`;
        }
    }

    render(){
        //create variable name and title from object props memberdata
        const {name, title} = this.props.memberData;
        const {buttonText} = this.state;
        return(
            <>  
                <div className='col col-md-3 col-xs-6'>
                    <div className='tag'>
                        <h6>{name}</h6>
                        <p>{title}</p>
                    </div>
                    <div>
                        <img src={this.setFilePath(name)} className='' alt='No Photos' onClick={this.onButtonClick}></img>
                        <p>
                            <button className='btn btn-primary btn-custom' onClick={this.onButtonClick}>{buttonText}</button>
                        </p>
                    </div>
                        
                </div>
            </>
        )         
    }
}

export default LMember