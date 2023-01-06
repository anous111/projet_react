import React from 'react';
import '../styles/Header.css';
import image_header from '../assets/322501485_944442606589700_739099954800228703_n.png';

export default function Header() {
    return (
        <>
            <div className='header'>
                <div className='header__descption'>
                    <h1>Une agence web tunisie</h1>
                    <p>Lorem Ipsum is simply dummy text of the printing as been Lorem Ipsum is simply dummy text of the printing as been Lorem Ipsum is simply dummy text of the printing as been Lorem Ipsum is simply dummy text of the printing as been Lorem Ipsum is simply dummy text of this simply dummyf th</p>
                    <a href="#">Parlons de votre projet </a>
                </div>
                <div className='header__image'>
                    <img src={image_header} alt="header" />
                    <div className='background'></div>
                </div>
            </div>
        </>
    )
}
