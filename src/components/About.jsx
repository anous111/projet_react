import React from 'react';
import '../styles/About.css';
import image_about from '../assets/323357882_846320553263941_2735834730065112471_n.png';

export default function About() {
  return (
    <div className='About'>
       <div className='About__image'>
        <img src={image_about} alt="this descrption" />
       </div>
      <div className='About__desc'>
         <h3 className='heading'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </h3>
         <p className='paragraphe'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
      </div>
    </div>
  )
}
