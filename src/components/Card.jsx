import React from 'react'
import '../styles/Card.css'
import image12 from '../assets/322733756_1315864525869806_2162587314810128142_n.png';
import image13 from '../assets/321952291_2082013228854520_661878721167136454_n.png'
import image14 from '../assets/323971838_1160551664644152_5450499374066163598_n.png'
import image15 from '../assets/321785649_850926596153712_5835276065062443355_n.png'
import image16 from '../assets/321658341_717658939772467_8951482550143310454_n.png'

export default function Card() {
  return (
    <div className='section'>
      <h2>Nouveaux articles</h2>
      <p>There are many variations of passages of lorem lpsum available, but the majority have suffered alteraction</p>
      <div className='cards'>
        <div className='cardarticle'>
          <div className='card__image' >
            <img src={image13} alt="LOREM" />
          </div>
          <div className='card__author' >
            <div className='card__author__bock1'>
              <img src={image12} alt="LOREM" />
              <span>AZ IT</span>
            </div>
            <div className='card__author__bock1'>
              <img src={image16} alt="LOREM" />
              <span>02 Mai 2022</span>
            </div>
          </div>
          <div className='card__disc' >
            <p>Discover cennect with great local business in your</p>
          </div>
        </div>

        <div className='cardarticle'>
          <div className='card__image' >
            <img src={image14} alt="LOREM" />
          </div>
          <div className='card__author' >
            <div className='card__author__bock1'>
              <img src={image12} alt="LOREM" />
              <span>AZ IT</span>
            </div>
            <div className='card__author__bock1'>
              <img src={image16} alt="LOREM" />
              <span>06 Mars 2022</span>
            </div>
          </div>
          <div className='card__disc' >
            <p>Discover cennect with great local business in your</p>
          </div>

        </div>
        <div className='cardarticle'>
          <div className='card__image' >
            <img src={image15} alt="LOREM" />
          </div>
          <div className='card__author' >
            <div className='card__author__bock1'>
              <img src={image12} alt="LOREM" />
              <span>AZ IT</span>
            </div>
            <div className='card__author__bock1'>
              <img src={image16} alt="LOREM" />
              <span>21 JIULLET 2022</span>
            </div>
          </div>
          <div className='card__disc' >
            <p>Discover cennect with great local business in your</p>
          </div>


        </div>
      </div>
    </div>
  )
}
