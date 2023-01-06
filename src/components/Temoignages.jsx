import React from 'react';
import '../styles/Temoignages.css';
import image12 from '../assets/322733756_1315864525869806_2162587314810128142_n.png';
export default function Temoignages() {
  return (
    <div className='Temoignages'>
           <p className='Temoignages__test'>Témoignages</p>
           <h2 className='Temoignages__heading'>Nos clients parlent de nous Mieux que nous</h2>
           <div className='cards'>

           <div className='card'>
              <div className='author'>
                <img src={image12} alt="text text " />
                <div className='author__head'>
                  <h3>Jack Williamson</h3>
                  <p>One Year With Us</p>
                </div>
              </div>
              <div className='author__disc'>
                <p>Lorem ipsum dolor sit amet, consec adipis. Cursus ultricies sit sit</p>
              </div>
           </div>

           <div className='card card--blue'>
           <div className='author'>
                <img src={image12} alt="text text " />
                <div className='author__head'>
                  <h3>Jack Williamson</h3>
                  <p>One Year With Us</p>
                </div>
              </div>
              <div className='author__disc'>
                <p>Lorem ipsum dolor sit amet, consec adipis. Cursus ultricies sit sit</p>
              </div>
           </div>
           <div className='card'>
           <div className='author'>
                <img src={image12} alt="text text " />
                <div className='author__head'>
                  <h3>Jack Williamson</h3>
                  <p>One Year With Us</p>
                </div>
              </div>
              <div className='author__disc'>
                <p>Lorem ipsum dolor sit amet, consec adipis. Cursus ultricies sit sit</p>
              </div>

           </div>
           </div>
    </div>
  )
}
