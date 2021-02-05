import React,{Component} from 'react';
import PropTypes from 'prop-types';

class SharedButton extends Component{

    constructor(props){
        super(props)
    }

    submitClick = () => {
        if(this.props.emitEvent){
            this.props.emitEvent();
        }
    }

    render(){
        const {buttonText} = this.props;

        return(
            <button onClick={() => this.submitClick()} data-test="buttonComponent">
            {buttonText}
            </button>
            
        )
    }
};

SharedButton.propTypes = {
    buttonText: PropTypes.string,
    emitEvent: PropTypes.func

};

export default SharedButton;