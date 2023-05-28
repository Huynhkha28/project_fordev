import React from "react";
import './Header.module.scss';
import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <>
            <header className="header bg-white fixed w-full shadow-md h-14 sm:h-16 md:h-20 items-center">
                <div className="max-w-screen-sm sm:max-w-screen-lg md:max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-2 py-2 md:px-4 md:py-3">
                    <Link href="../../" className="nav-link">
                        <div className="header-logo py-2 px-4 sm:p-3 item-center rounded-full">
                            <Image
                                src="/public/image/Logo.png"
                                width={60}
                                height={60}
                                alt="Picture of the author"
                            />
                        </div>
                    </Link>
                    <nav>

                    </nav>
                </div>
            </header>
        </>
    )
}