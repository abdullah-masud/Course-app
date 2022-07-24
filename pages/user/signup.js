import React from 'react';
import Image from 'next/image'
import google from '../../assets/google.png'
import email from '../../assets/email.png'
import Link from 'next/link'

const signup = () => {
    return (
        <div className='max-w-7xl lg:py-12 mx-auto  min-h-screen flex justify-center items-center'>
            <div className="lg:card lg:w-2/4 h-full bg-[#e2f5ff] shadow-xl lg:pb-12">
                <div>
                    <h2 className='text-center text-3xl bg-[#1F497B] text-white py-6'>Signup</h2>
                </div>
                <div className=' px-2 mt-4'>
                    <h2 className='text-[#1F497B] font-semibold mb-2'>Name <span className='text-red-500'>*</span></h2>
                    <div className='flex gap-2'>
                        <input type="text" placeholder="First" className="input input-bordered input-sm w-full max-w-xs" />
                        <input type="text" placeholder="Middle" className="input input-bordered input-sm w-full max-w-xs" />
                        <input type="text" placeholder="Last" className="input input-bordered input-sm w-full max-w-xs" />
                    </div>
                </div>
                <div className='px-2 my-6 flex justify-between'>
                    <div>
                        <h2 className='text-[#1F497B] font-semibold mb-2'>Birth Date <span className='text-red-500'>*</span></h2>
                        <input type="text" placeholder="MM/DD/YYYY" className="input input-bordered input-sm w-full max-w-xs" />
                    </div><div>
                        <h2 className='text-[#1F497B] font-semibold mb-2'>Gender<span className='text-red-500'>*</span></h2>
                        <select className="select select-bordered select-sm w-full max-w-xs">
                            <option disabled selected>Select Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>
                </div>
                <div className='px-2 mt-2'>
                    <h2 className='text-[#1F497B] font-semibold mb-2'>Address<span className='text-red-500'>*</span></h2>
                    <div className='gap-2 '>
                        <input type="text" placeholder="Address 1" className="input input-bordered input-sm w-full " />
                        <input type="text" placeholder="Address 2" className="input input-bordered input-sm w-full my-3" />
                    </div>
                    <div className='flex'>
                        <div className='flex-1'>
                            <input type="text" placeholder="Postal/Zipcode" className="input input-bordered input-sm w-full max-w-xs" />
                        </div>
                        <div className='flex-1'></div>
                        <div className='flex-1'>
                            <select className="select select-bordered select-sm w-full max-w-xs">
                                <option disabled selected>Country</option>
                                <option>Bangladesh</option>
                                <option>India</option>
                                <option>Pakistan</option>
                            </select>
                            <select className="select select-bordered select-sm w-full max-w-xs mt-4">
                                <option disabled selected>Region</option>
                                <option>Chittagong</option>
                                <option>Other</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='px-2 mt-2'>
                    <h2 className='text-[#1F497B] font-semibold mb-2'>Email Address<span className='text-red-500'>*</span></h2>
                    <div >
                        <input type="text" placeholder="@gmail.com" className="input input-bordered input-sm w-full " />
                    </div>
                </div>
                <div className='my-12 flex flex-col gap-y-2 items-center'>
                    <button className="p-2 w-1/2 shadow-lg rounded-lg bg-base-100 text-[#1F497B] border-none font-semibold flex items-center justify-center gap-2">
                        <Image
                            src={google}
                            alt="logo"
                        />
                        Continue with Gmail
                    </button>
                    <button className="p-2 w-1/2 shadow-lg rounded-lg bg-base-100 text-[#1F497B] border-none font-semibold flex items-center justify-center gap-2">
                        <Image
                            src={email}
                            alt="logo"
                        />
                        Continue with Email
                    </button>
                </div>
                <div className='flex justify-center pr-2 lg:pb-0 pb-2'>
                    <button className="p-2 w-1/5 shadow-lg rounded-lg bg-[#1F497B] text-white border-none font-semibold">Save</button>
                </div>
                <div className='mt-12 flex justify-evenly items-center lg:pb-0 pb-4'>
                    <h2 className='font-semibold'>Already have an Account?</h2>
                    <Link href={`/user/login`}>
                        <button className="p-2 px-6 shadow-lg rounded-lg bg-base-100 text-[#1F497B] border-none font-semibold">Login</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default signup;