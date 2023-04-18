import React, { useState, useEffect } from 'react';
import { FaArrowAltCircleLeft } from 'react-icons/fa'; 

const CarrouselCard = ({images}) => {
  const [indice, setIndice] = useState(0);

  let myInterval;

  const next = () => {
    clearInterval(myInterval);
    if (indice < images.length - 1) {
      setIndice(indice + 1);
    } else {
        setIndice(0);
    }
  };

  const back = () => {
    clearInterval(myInterval);
    if (indice > 0) {
      setIndice(indice - 1);
    } else {
        setIndice(images.length - 1);
    }
  };

  const autoNext = () => {
    if (indice < images.length - 1) {
      setIndice(indice + 1);
    } else {
        setIndice(0);
    }
  };

  useEffect(()=>{
    myInterval = setTimeout(autoNext, 2500)
  },[indice])

  return (
    <div>
        <div className='flex flex-row items-center gap-2'>
            <FaArrowAltCircleLeft className='h-10 w-8 text-yellow-300 duration-300 cursor-pointer hover:scale-110 hover:text-yellow-100'
                onClick={back}
            />
            <div className='flex flex-col items-center'>
                <button className='bg-green-500 px-4 py-2 rounded-2xl w-fit relative top-5 text-white font-bold shadow-lg'>
                    $ {images[indice].price}
                </button>
                <img src = {images[indice].url} alt='' className=' h-80 rounded-2xl' />
                <p className='text-lg text-white self-star pt-2 font-bold'>{images[indice].title}</p>
            </div>
            <FaArrowAltCircleLeft 
                className='h-10 w-8 text-yellow-300 duration-300 cursor-pointer hover:scale-110 hover:text-yellow-100 rotate-180' 
                onClick={next}
            />
        </div>
    </div>
  );
};

export default CarrouselCard 