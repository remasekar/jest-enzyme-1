import React, {Component} from 'react';

class Headline extends Component{

    constructor(props){
        super(props)
    }

    render(){
        const { header, desc} = this.props;
        if(!header){
            return null
        }
        return(
            <div data-test="headline component"> 
                <h1 data-test="headelineclass"> {header } </h1> 
                <p data-test="paraclass" >{desc} </p>

            </div>
        )
    }
}

export default Headline;