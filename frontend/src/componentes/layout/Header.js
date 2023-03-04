import React from 'react';
import { TypeAnimation } from 'react-type-animation';


const Header = (props) => {
  
  return (
    <header className='holder' >

      <h2>A Tamo junto no diabetes tem como objetivo a gestao de nossos pacientes diabéticos ser mais
    
    <TypeAnimation
    // Same String at the start will only be typed once, initially
    sequence={[
    ' inovadora e tecnológica',
    2000,
    ' solidária e humanizada',
    2000,
    ' eficaz e eficiente',
    2000,
    ]}
    speed={50} // Custom Speed from 1-99 - Default Speed: 40
    //style={{ fontSize: '2em' }}
    deletionSpeed={75}
    wrapper="span" // Animation will be rendered as a <span>
    repeat={Infinity} // Repeat this Animation Sequence infinitely
  />

</h2>

    </header>
  );
}
export default Header;