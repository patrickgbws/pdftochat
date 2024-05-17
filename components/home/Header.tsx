'use client';
import { useState } from 'react';
import Logo from '../ui/Logo';
import Link from 'next/link';

const headerNavLinks = [
    { href: '/', title: 'Home' },
    { href: '/tools', title: 'Tools' },
    { href: '/About-us', title: 'About us' },
    { href: '/contact-us', title: 'Contact us' },
    { href: '/privacy-policy', title: 'Privacy Policy' },
    {
        href: '', title: 'Language',
        children: [
            { href: '/', title: 'English' },
            { href: '/br', title: 'Português (BR)' },
            { href: '/es', title: 'Español (ES)' },
            { href: '/id', title: 'Indonesia (ID)' },
        ]
    },
];

const Header = () => {
    return (
        <>
            <div className='bg-[#050f1f] '>
                {/* logo and menus */}
                <div className="container max-w-screen-xl mx-auto hidden w-full text-white h-16 sm:flex justify-between items-center px-4 py-[10px]">
                    <div className="">
                        <Logo />
                    </div>
                    <div className="flex items-center text-[16px] space-x-4 leading-5 sm:space-x-6">
                        {headerNavLinks.map(link => (
                            <div key={link.title} className="font-medium text-[15px] group relative hover:text-[#00D3B6] flex items-center gap-1 py-5">
                                <a className="hover:cursor-pointer" href={link.href}>
                                    {link.title}
                                </a>
                                {link.children && (
                                    <>
                                        <div className="bg-white shadow-[0px_12px_24px_rgba(0,80,125,0.08)] absolute top-[62px] left-1/2 -translate-x-1/2 max-w-[1300px] w-full min-w-fit rounded-xl transition-all overflow-hidden origin-top-left opacity-0 scale-y-0 -translate-y-5 -z-10 flex group-hover:opacity-100 group-hover:scale-y-100 group-hover:translate-y-0 group-hover:z-10">
                                            <div className="p-4 space-y-4">
                                                {link.children.map(child => (
                                                    <a key={child.title} className="flex items-center whitespace-nowrap gap-[6px] text-display font-semibold text-black hover:text-[#00D3B6]" href={child.href}>
                                                        {child.title}
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                        <span className="transform transition-transform duration-300 group-hover:rotate-180">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 font-[900]">
                                                <path fillRule="evenodd" d="M12 15.707l-5.646-5.647a.75.75 0 011.06-1.06L12 13.586l4.586-4.586a.75.75 0 111.06 1.06L12 15.707z" clipRule="evenodd" />
                                            </svg>
                                        </span>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                    <div className="flex items-center justify-between min-w-16">
                        <a
                            className="block bg-[#00eab4] text-[#000000] text-[15px] font-[600] px-5 py-2 rounded-full"
                            href="/dashboard"
                            rel="nofollow">
                            Try For Free
                        </a>
                    </div>
                </div>

                {/*Chat with Your PDF for Free */}
                <div className="container max-w-screen-xl mx-auto text-center w-full px-4 pt-[58px] pb-[400px]">
                    <h1 className="max-w-[867px] mx-auto text-center text-white text-[65px] font-[600] leading-[70px] my-[40px]">
                        Talk, Chat, Ask Your PDF Documents
                    </h1>
                    <p className="max-w-[700px] mx-auto text-center text-[18px] text-[#c8cbcc] leading-[30px] ">
                        No more scrolling through endless pages - instead, start a conversation. Get answers and insights from PDFs instantly.
                    </p>
                    <Link href={'/dashboard'}>
                        <button className="bg-[#00eab4] text-center rounded-full text-[#000] hover:text-[#6e6e6e] text-[20px] font-[700] px-[30px] py-[10px] mt-[50px] mb-[30px]">
                            Chat With Your PDF For Free
                        </button>
                    </Link>
                </div>
            </div>
        </>
    );
}

export default Header;
