import React from 'react';



class LMember extends React.Component {

    constructor(){
        super();
        this.state = {
            seeRobot: 'false',
            invertedValue: 'true',
            buttonText: 'See Robot'
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
        let filePath='';
        let name='Jo Immanuel';
        let title='Dota2 Pro Player';
        if(this.state.seeRobot==='true'){
            filePath=`https://robohash.org/${name}`
        } else {
            filePath=`../img/${name}.jpg`;
        }
        return(
            <>  <h1>{name}</h1>
                <h3>{title}</h3>
                <img src={filePath} alt='No Photos'></img>
                <p>
                    <button value={this.state.invertedValue} onClick={this.onButtonClick}>{this.state.buttonText}</button>
                </p>

            </>
        )         
    }
}

export default LMember