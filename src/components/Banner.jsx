import React from 'react';
import '../styles/Banner.css';

export default function Banner() {
    return (
        <>
            <div className='banner'>
                <h2 className='banner__heading'>NOTRE APPROCHE</h2>
                <p className='banner__parag'>Nous avons une approche éprouvée pour fournir des sites Web efficaces et obtenir des excellents résultats pour nos clients!</p>
                <div className='cards'>
                    <div className='card'>
                        <h3 className='card__heading'>Objectifs du projet</h3>
                        <p className='card__parag' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </div>

                    <div className='card card--blue'>
                        <h3 className='card__pink'>Expertise technique</h3>
                        <p className='card__parag' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </div>

                    <div className='card'>
                        <h3 className='card__blue'>Conception de sites Web et convivialité</h3>
                        <p className='card__parag'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </div>

                </div>
            </div>
        </>
    )
}
