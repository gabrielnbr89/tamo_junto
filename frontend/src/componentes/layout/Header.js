import React from 'react';
import { TypeAnimation } from 'react-type-animation';


const Header = (props) => {
  
  return (
    <header className='holder' >

      <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates soluta obcaecati esse quas?
    
    <TypeAnimation
    // Same String at the start will only be typed once, initially
    sequence={[
    ' Lorem ipsum dolor',
    3000,
    ' sit amet',
    3000,
    ' dipisicing elit',
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