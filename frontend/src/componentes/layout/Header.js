import React from 'react';
import { TypeAnimation } from 'react-type-animation';


const Header = (props) => {
  
  return (
    <header className='holder' >

      <h2>A TMJND tem como objetivo a gestão de nossos associados diabéticos ser mais
    
    <TypeAnimation
    // Same String at the start will only be typed once, initially
    sequence={[
    ' inovadora e tecnológica',
    3000,
    ' solidária e humanizada',
    3000,
    ' eficaz e eficiente',
    3000,
    ]}
    speed={45} // Custom Speed from 1-99 - Default Speed: 40
    //style={{ fontSize: '2em' }}
    deletionSpeed={70}
    wrapper="span" // Animation will be rendered as a <span>
    repeat={Infinity} // Repeat this Animation Sequence infinitely
  />

</h2>

    </header>
  );
}
export default Header;