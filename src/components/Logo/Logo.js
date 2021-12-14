import React from 'react'
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './brain.png'

const Logo = () => {
    return (
        <div className='ma4 mt0' style={{ width: 100, paddingTop: '0px' }}>
            <Tilt className='br2 shadow-2'>
                <div className='imgContainer'>
                    <img src={brain} alt='logo' ></img>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;