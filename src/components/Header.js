import { useState } from 'react';
import logo from '../../images.png'
const Header = ()=>{

    const [buttonTitle,setButtonTitle] = useState('Login')
    handleClick = ()=>{
        if(buttonTitle === 'Login'){
            setButtonTitle('Logout');
        }else{
            setButtonTitle('Login');
        }
    }

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo} alt="food logo"/> 
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className={'login-button'} onClick={handleClick}>{buttonTitle}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;