import React from 'react';
import '../styles.css';

export default function Header(){
    return (
        <div className='header'>
            <img className='logo' src='logo3.png' alt="cinerate" />
            <h2 className='app-subtitle'>Let's go.</h2>
        </div>
    );
}