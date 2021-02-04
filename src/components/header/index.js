import React from 'react';
import './styles.scss';
import logo from '../../assets/graphics/catlogo.png'

const Header = (props) => {
    return(
        <header> 
            <div className="wrap">
                <div className="logo">
                <img src={logo}></img>
                </div>
            </div> 

        </header>
    )
}

export default Header;