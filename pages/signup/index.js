import React, { useState } from 'react';
import Headers from '../../components/Header/Header';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';
export default function Signup() {
    return (
        <div className='signin h-full w-full'>
            <Headers />
            <div className="h-full flex items-center justify-center">
                <div className="signin-form w-[570px] h-[600px] bg-slate-100 absolute top-[15%] border border-solid border-black">
                    <div className='h-[13%] border-b border-solid border-black'>
                        <div className='h-full flex items-center justify-center font-semi-bold text-[30px]'>
                            Sign up
                            <Link href="/" className='text-[20px] px-6 py-1 relative top-[-19px] left-[202px] bg-slate-300 hover:bg-red-600 hover:text-white'><FontAwesomeIcon icon={faX} /></Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}