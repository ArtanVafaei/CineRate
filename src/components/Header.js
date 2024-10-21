import React from 'react';
import '../styles.css';

export default function Header(){
    return (
        <div className='header'>
            <img className='logo' src='logo.png' alt="cinerate" />
            <h2 className='app-subtitle'>Curate your cinema experience.</h2>
        </div>
    );
}