import React from 'react';
import Navbar from '../components/Navbar';
import education from '../assets/education.png'
import Image from 'next/image'
import courseIcon from '../assets/courseIcon.png'
import refundIcon from '../assets/refundIcon.png'

const aboutUs = () => {
    return (
        <>
            <Navbar />
            <div className='max-w-7xl mx-auto'>
                <div className='my-12 flex lg:justify-between justify-center items-center lg:flex-row flex-col'>
                    <h2 className='lg:text-5xl text-3xl  text-center text-[#06356C] font-semibold'>Changing learning for the better</h2>
                    <div className=''>
                        <Image src={education} alt="education" />
                    </div>
                </div>
                <div className='flex lg:flex-row flex-col justify-evenly lg:px-0 px-12 my-12'>
                    <div className='lg:w-2/6 shadow-lg flex flex-col items-center py-12'>
                        <Image src={courseIcon} alt="homecourseIconIcon" />
                        <h1 className='lg:text-2xl text-1xl  font-semibold mt-2'>More On Courses</h1>
                    </div>
                    <div className='lg:w-2/6 shadow-lg flex flex-col items-center lg:mt-0 mt-12 py-12'>
                        <Image src={refundIcon} alt="refundIcon" />
                        <h1 className='text-2xl font-semibold mt-2'>Refund Policies</h1>
                    </div>
                </div>
            </div>
        </>
    );
};

export default aboutUs;