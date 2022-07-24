import React from 'react';
import logo from '../../assets/footerLogo.png'
import logo1 from '../../assets/logo1.png'
import Image from 'next/image'
import Link from 'next/link'

const login = () => {
    return (
        <div className='max-w-7xl lg:py-12 mx-auto lg:h-screen min-h-screen flex justify-center items-center'>
            <div className="lg:card lg:w-2/4 h-full bg-[#e2f5ff] shadow-xl ">
                <div>
                    <h2 className='text-center text-3xl bg-[#1F497B] text-white py-6'>Login</h2>
                    <div className='w-1/5 mx-auto flex flex-col items-center'>
                        <Image
                            src={logo}
                            alt="logo"

                        />
                        <Image
                            src={logo1}
                            alt="logo"
                        />
                    </div>
                </div>
                <div className='lg:px-0 px-2'>
                    <div className='flex items-center justify-center'>
                        <h2 className='pr-2 text-[#1F497B] font-semibold'>Username</h2>
                        <input required type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>
                    <div className='flex items-center justify-center mt-8'>
                        <h2 className='pr-2 text-[#1F497B] font-semibold'>Password</h2>
                        <input required type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                    </div>

                    <div className='flex items-center justify-center mt-14'>
                        <h2 className='pr-2 text-[#1F497B] font-semibold'>Role</h2>
                        <select className="select select-bordered select-sm w-full max-w-xs">
                            <option disabled selected>Select Field</option>
                            <option>Instructor</option>
                            <option>Student</option>
                        </select>
                    </div>
                    <div className='my-12 flex justify-center'>
                        <button className="btn btn-sm bg-[#1F497B] border-none">Login</button>
                    </div>
                    <div className='flex justify-center'>
                        <a href='#'>Forget Passowrd?</a>
                    </div>
                    <div className='mt-12 flex justify-evenly items-center lg:pb-0 pb-4'>
                        <h2>Dont have an account?</h2>
                        <Link href={`/user/signup`}>
                            <button className="p-2 shadow-lg rounded-lg bg-base-100 text-[#1F497B] border-none">Create an Account</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default login;