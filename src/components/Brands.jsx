import React from 'react';
import '../styles/Brands.css';
import image1 from '../assets/321730796_553389180041417_8787147504731688763_n.png';
import image2 from '../assets/321876096_904048767275209_760758283089499285_n.png';
import image3 from '../assets/321955709_542197897964669_4405978168926195719_n.png';
import image4 from '../assets/322577952_434515365457262_6535009872041102643_n.png';
import image5 from '../assets/322832374_1420403671823315_6360631632907817051_n.png';
import image6 from '../assets/322859733_1327227154701635_2342833016081292319_n.png';
import image7 from '../assets/323074359_902021031177626_1289840640812803137_n.png';
import image8 from '../assets/323580599_540307028134523_2790493669753246834_n.png';
import image9 from '../assets/321879246_3244954382422830_5919425844210694811_n.png';
import image10 from '../assets/324066061_460781132747285_5928175200203806228_n.png';
import image11 from '../assets/324383982_1209828209627502_4302449802384212636_n.png';

export default function Brands() {
  return (
    <div className='Brands'>
       <h2 className='Brands__heading'>Entreprises avec lesquelles nous travaillons</h2>
       <p className='Brands__paragraphe'>Dictum tortor, sed scelerisque mattis malesuada. Urna sed magna a sed nulla egestas bibendum eget. Consectetur urna varius dolor, fermentum turpis. Sit malesuada id tortor viverra gravida cras. In quis.</p>
        <div className='Brands__images'>
          <img src={image1} alt="lorem ipsum" />
          <img src={image7} alt="lorem ipsum1" />
          <img src={image3} alt="lorem ipsum2" />
          <img src={image5} alt="lorem ipsum3" />
          <img src={image4} alt="lorem ipsum4" />
          <img src={image10} alt="lorem ipsum5" />
          <img src={image8} alt="lorem ipsum6" />
          <img src={image2} alt="lorem ipsum5" />
          <img src={image6} alt="lorem ipsum8" />
          <img src={image9} alt="lorem ipsum9" />
          <img src={image11} alt="lorem ipsum10" />
        </div>
    </div>
  )
}
