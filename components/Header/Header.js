
import './Header.module.scss';
import Link from "next/link";
import Image from "next/image";
import * as React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faCaretDown, } from '@fortawesome/free-solid-svg-icons';
import { faPipe } from '@fortawesome/free-solid-svg-icons';
const CartWindow = ({ cartItems }) => {
    return (
        <div className='cart-window h-[200px] w-[300px] bg-zinc-100 border-2 absolute top-100 right-[-110px] top-[40px]'>
            <h2 className='py-2 d-block text-xl text-center font-semibold border-b-2'>Shopping cart</h2>
            <div className='cart-content'>
                {cartItems.length === 0 ?
                    (<div className='cart-items py-3'>
                        <p className='text-center text-lg text-gray-400'>Cart is empty</p>
                        <p className='text-center text-lg text-gray-400	'>Keep shopping now</p>
                    </div>): (
                        <ul>
                            {cartItems.map((item) => (
                                <li key={item.id}>{item.name}</li>
                            ))}
                        </ul>
                    )
                }
            </div>
            <div className=' flex border-t-2 justify-between flex-row pt-4'>
                <div className='total flex pl-2 pt-1'>
                    <p className='text-center font-semibold'>Total: </p>
                    <p className='text-center font-semibold ml-2'>$0</p>
                </div>
                <div className='checkout-btn pr-4'>
                    <button className='bg-slate-900 h-10 text-white text-sm font-bold px-3'>Checkout</button>
                </div>
            </div>
        </div>
    )
}

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [cartItems, addTocarts] = useState([]);
    const divClassesShoppingCart = `cart-shopping flex items-center justify-end ml-auto text-lg flex-row relative  ${isOpen ? "before:content-[''] before:absolute before:w-[20px] before:h-[20px] before:absolute before:top-[20px] before:right-[0] before:border-[10px] before:border-zinc-100 before:border-r-transparent before:border-l-transparent before:border-t-transparent" : ''
        }`;
    const toggleCart = () => {
        setIsOpen(!isOpen);
    }
    return (
        <>
            <header className="header bg-white fixed w-full shadow-md h-14 sm:h-16 md:h-20 items-center sticky top-0">
                <div className="header-wrap max-w-screen-sm sm:max-w-screen-lg md:max-w-screen-xl flex flex-wrap items-center  mx-auto px-2 md:px-0 sm:px-5 pt-3 sm:pt-4 md:pt-5">
                    <Link href="../../" className="nav-link">
                        <div className="header-logo  item-center rounded-full">
                            <Image
                                src={"/../public/image/logofordev.png"}
                                width={130}
                                height={0}
                                alt="Picture of the author"
                            />
                        </div>
                    </Link>
                    <nav className="flex sm:justify-center space-x-4 justify-items-start ml-5 ">
                        {[
                            ['Contact', '/contact'],
                            ['Rate', '/rate'],
                            ['Test', '/test'],
                            ['Support', '/support'],
                        ].map(([title, url]) => (
                            <a href={url} key={title} className="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900 font-bold text-base">{title}</a>
                        ))}
                    </nav>
                    <div className={divClassesShoppingCart}>
                        <FontAwesomeIcon icon={faCartShopping} style={{ fontSize: '26px' }} onClick={toggleCart} className='hover:cursor-pointer hover:opacity-70' />
                        {isOpen && CartWindow({ cartItems })}
                    </div>
                    <div className="flex items-center justify-end ml-4">
                        <Link href="/signin">
                            <button className="bg-slate-900 h-10 w-20 text-white font-bold rounded-lg">
                                Sign Up
                            </button>
                        </Link>
                        <Link href='/login'>
                            <button className="bg-slate-900 h-10 w-20 ml-4 text-white font-bold rounded-lg">
                                Log in
                            </button>
                        </Link>
                    </div>
                    <div className="flex items-center justify-end ml-4 hidden">
                        <Image
                            src={"/../public/image/avatar.jpg"}
                            width={40}
                            height={0}
                            alt="Picture of the author"
                            className='rounded-full'
                        />
                        <span className='ml-2 font-semibold'>huynhkha</span>
                        <FontAwesomeIcon icon={faCaretDown} className='text-xl ml-2' />                   
                    </div>
                </div>
            </header>
        </>
    )
}
