import React, {Component} from 'react';
import PropTypes from 'prop-types';

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

Headline.proptype = {
    header: PropTypes.string,
    desc: PropTypes.string,
    tempArr: PropTypes.arrayOf(PropTypes.shape({
        fName: PropTypes.string,
        lName: PropTypes.string,
        age: PropTypes.number,
        online: PropTypes.bool
    }))
}

export default Headline;