import React from 'react';


class LMember extends React.Component {

    constructor(){
        super();
        this.state = {
            seeRobot: 'false',
            invertedValue: 'true',
            buttonText: 'See Robot Form'
        }
    }
    
    onButtonClick = (event) => {
        if (this.state.invertedValue ==='true'){    
            this.setState({
                    seeRobot : event.target.value,
                    invertedValue: 'false',
                    buttonText: 'See Human Form'
                }
            )
        } else{
            this.setState({
                seeRobot : event.target.value,
                invertedValue: 'true',
                buttonText: 'See Robot Form'
            })
        }
    }

    render(){
    
        const {name, title} = this.props.memberData;
        let filePath='';

        if(this.state.seeRobot==='true'){
            filePath=`https://robohash.org/${name}` //Set picture file path into robohash url if seeRobot value is 'true'
        } else {
            filePath=`../img/${name}.jpg`; //Set picture file path into local image file if seeRobot value is not 'true'
        }
        return(
            <>  
                <div className='col'>
                    <div className='tag'>
                        <h6>{name}</h6>
                        <p>{title}</p>
                    </div>
                    <div>
                        <img src={filePath} className='' alt='No Photos'></img>
                        <p>
                            <button className='btn btn-primary'value={this.state.invertedValue} onClick={this.onButtonClick}>{this.state.buttonText}</button>
                        </p>
                    </div>
                        
                </div>
            </>
        )         
    }
}

export default LMember