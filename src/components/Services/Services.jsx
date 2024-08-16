import React from 'react'
import {
    FaCarSide,
    FaHeadphonesAlt,
    FaWallet,
    FaCheckCircle,
} from 'react-icons/fa'

const ServiceData = [
    {
        id: 1,
        icon: <FaCarSide className='text-4xl md:text-5xl text-[#28ff85]' />,
        title: 'free shipping',
        description: 'free shipping all over indonesia',
    },
    {
        id: 2,
        icon: <FaCheckCircle className='text-4xl md:text-5xl text-[#2ABA68]' />,
        title: 'save money',
        description: '30 Days Money Back Warranty',
    },
    {
        id: 3,
        icon: <FaWallet className='text-4xl md:text-5xl text-[#2ABA68]' />,
        title: 'secure money',
        description: 'All Payment Secured & Verified',
    },
    {
        id: 4,
        icon: <FaHeadphonesAlt className='text-4xl md:text-5xl text-[#2ABA68]' />,
        title: 'free shipping',
        description: 'technical support available 24/7',
    },
];

const Services = () => {
  return (
    <>
      <div className='container'>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8'>
            {ServiceData.map((data, index) => (
                <div className='flex flex-col items-start sm:flex-row gap-4'>
                    {data.icon}
                    <div>
                        <h1>{data.title}</h1>
                        <p>{data.description}</p>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default Services;
