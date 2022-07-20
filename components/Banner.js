import React from 'react';
import Image from 'next/image'
import molecule1 from '../assets/molecule1.png'
import molecule2 from '../assets/molecule2.png'

const Banner = () => {
    return (
        <div className='bg-blue-800 h-96 flex '>
            <div className=' hidden lg:block'>
                <Image src={molecule1} alt="homeIcon" width="510px" height="665px" />
            </div>
            <div className='lg:flex-1 '>
                <div className='h-full flex flex-col justify-center'>
                    <div className=''>
                        <h1 className='text-6xl text-white font-bold text-center'>Save Big, Learn big</h1>
                        <h1 className='text-3xl text-white font-semibold my-7 text-center'>Shop our big sale of courses</h1>
                    </div>
                    <div className='lg:flex items-center justify-center gap-2  grid'>
                        <select className="select select-bordered select-sm w-full max-w-xs">
                            <option disabled selected>Select Field</option>
                            <option>FMCSA</option>
                            <option>FMCSA training materials</option>
                            <option>dot supervisor training</option>
                            <option>dot supervisor training requirements</option>
                        </select>
                        <div className="form-control ">
                            <div className="input-group ">
                                <input type="text" placeholder="Search…" className="input input-bordered lg:w-96 mx-a" />
                                <button className="btn btn-square">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLineca="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
            <div className='hidden lg:block'>
                <Image src={molecule2} alt="homeIcon" width="653px" height="687px" />
            </div>
        </div >
    );
};

export default Banner;