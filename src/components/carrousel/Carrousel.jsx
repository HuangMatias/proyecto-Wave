import React from "react";
import CarrouselCard from "./CarrouselCard";

const Carrousel = () => {     
    const images = [
        {
            title:'Remera Cielo',
            price:6800,
            url:'https://res.cloudinary.com/wave-project/image/upload/v1679446741/REMERA_CIELO_eaja5a.webp',
        },
        {
            title:'Buzo Trigonometry (Mujer)',
            price:8500,
            url:'https://res.cloudinary.com/wave-project/image/upload/v1679446740/BUZO_TRIGONOMETRY_MUJER_kqldia.webp',
        },
        {
            title:'North Shore T-Shirt',
            price:5990,
            url: 'https://res.cloudinary.com/wave-project/image/upload/v1679446740/NORTH_SHORE_T-SHIRT_ueb611.webp',
        },
        {
            title:'Buzo Chemistry',
            price:8500,
            url: 'https://res.cloudinary.com/wave-project/image/upload/v1679446740/BUZO_CHEMISTRY_umjiit.webp',
        },
        {
            title:'Physics board T-shirt',
            price:5990,
            url: 'https://res.cloudinary.com/wave-project/image/upload/v1679446741/PHYSICS_BOARD_T-SHIRT_rlgnld.webp',
        },
        {
            title:'Space T-Shirt',
            price:5990,
            url: 'https://res.cloudinary.com/wave-project/image/upload/v1679446969/SPACE_T-SHIRT_mi3q2l.webp',
        },       
        {
            title:'Trigonometria T-Shirt',
            price:5990,
            url: 'https://res.cloudinary.com/wave-project/image/upload/v1679446741/TRIGONOMETRIA_T-SHIRT_uepiqm.webp',
        },
        {
            title:'Pantuflas Chemistry',
            price:4590,
            url:'https://res.cloudinary.com/wave-project/image/upload/v1679446741/PANTUFLAS_CHEMISTRY_keqmuj.webp',
        },
        {
            title:'Pantuflas Bicycles',
            price:4590,
            url: 'https://res.cloudinary.com/wave-project/image/upload/v1679446741/PANTUFLAS_BICYCLES_qpcqjo.webp',
        },
        {
            title:'Pantuflas Pentagram',
            price:4590,
            url: 'https://res.cloudinary.com/wave-project/image/upload/v1679446741/PANTUFLAS_PENTAGRAM_xb3ajq.webp',
        },

    ];

    return <div className='bg-black-900 w-full flex flex-col items-center'>
        <div className='flex flex-col border-2 p-12 rounded-2xl mt-10 mb-10'>
        <button className='bg-green-500 px-4 rounded-2xl relative bottom-16 text-white font-bold'>
        PRODUCTOS DESTACADOS
        </button>
        <CarrouselCard images={images} />
        </div>
    </div>
};

export default Carrousel