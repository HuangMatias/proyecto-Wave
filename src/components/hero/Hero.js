

import React from "react";
import heroimg from "../../assets/imagenhero.jpg"


  const Hero = () => {
  return (
    <div className='container mt-3'>
      <div className='row'>
        <div className='hero'>
          Wave Siempres con vos...
                
        
        <img className='img-fluid w-100' src={heroimg} alt='imagen hero' />
        </div> 
      </div> 
    </div>
  );
}

export default Hero;