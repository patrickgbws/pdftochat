'use client';
import { useState } from 'react';
import Logo from '../ui/Logo';
import Link from 'next/link';

const headerNavLinks = [
    { href: '/', title: 'Home' },
    { href: '/tools', title: 'Tools' },
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
]

const Header = () => {
    return (
        <>
            <div className='Mask_blueBanner bg-[#050f1f] pt-[10px]'>
                {/* logo and meus */}
                <div className="container max-w-screen-xl mx-auto hidden w-full text-white h-16 sm:flex justify-between items-center px-4 ">
                    <div className="">
                        <Logo />
                    </div>

                    <div className="flex items-center text-[16px] space-x-4 leading-5 sm:space-x-6">
                        {headerNavLinks.map(link => (
                            <div key={link.title} className="font-medium text-[15px] group relative hover:text-[#00D3B6] flex items-center gap-1 py-5 after:i-com--up after:w-5 after:h-5 after:transition-all after:origin-center after:rotate-180 hover:after:rotate-0">
                                <span className="hover:cursor-pointer">
                                    {link.title}
                                </span>
                                {link.children && (
                                    <div className="bg-white shadow-[0px_12px_24px_rgba(0,80,125,0.08)] absolute top-[62px] left-1/2 -translate-x-1/2 max-w-[1300px] w-full min-w-fit rounded-xl transition-all overflow-hidden origin-top-left opacity-0 scale-y-0 -translate-y-5 -z-10 flex group-hover:opacity-100 group-hover:scale-y-100 group-hover:translate-y-0 group-hover:z-10">
                                        <div className="p-4 space-y-4">
                                            {link.children.map(child => (
                                                <a key={child.title} className="flex items-center whitespace-nowrap gap-[6px] text-display font-semibold hover:text-primary" href={child.href}>
                                                    {child.title}
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/*<div className="flex items-center text-[16px] space-x-4 leading-5 sm:space-x-6">*/}
                    {/*    {headerNavLinks.map((link, index) => (*/}
                    {/*        <div key={index} className="group">*/}
                    {/*            <RecursiveLink link={link} />*/}
                    {/*        </div>*/}
                    {/*    ))}*/}
                    {/*</div>*/}

                    <div className="flex items-center justify-between min-w-16">
                        <a
                            className="block bg-gradient-to-r from-[#40aefc] to-[#8160fe] text-[#ffffff] text-[16px] font-[500] px-5 py-1 rounded-full "
                            href="/dashboard"
                            rel="nofollow">
                            Try For Free
                        </a>
                    </div>

                    {/*<div className="flex items-center space-x-4 leading-5 sm:space-x-6">*/}
                    {/*    {headerNavLinks.map((link, index) => (*/}
                    {/*        <div key={index} className="group text-lg">*/}
                    {/*            <RecursiveLink link={link} />*/}
                    {/*        </div>*/}
                    {/*    ))}*/}
                    {/*    <MobileNav />*/}
                    {/*</div>*/}
                </div>

                {/* Chat with Your PDF for Free */}
                <div className="container mx-auto max-w-screen-xl pt-[188px] md:pt-[100px] pb-[188px] sm:pb-[400px] px-[22px] sm:px-4 text-center ">

                  {/*<span className='border rounded-full py-0.5 px-5 text-white transition duration-300 ease-in-out sm:text-base text-sm cursor-pointer hover:text-gray-200'>*/}
                  {/*  Powered by Openai & Google Gemini (Formerly Bard)*/}
                  {/*</span>*/}

                    <h1 className="max-w-[867px] mx-auto text-center text-white font-normal text-[42px] sm:text-[75px] leading-[40px] sm:leading-[70px] sm:mt-[30px] mt-[30px] sm:mb-[20px] mb-[20px]">
                        Talk, Chat, Ask Your PDF Documents
                    </h1>

                    <p className="max-w-[867px] mx-auto text-center text-white text-[16px] sm:text-[18px] pb-10 sm:pb-8 leading-[22px] sm:leading-[30px] w-[232px] sm:w-full sm:mt-[50px] mt-[50px] sm:mb-[50px] mb-[50px]">
                        No more scrolling through endless pages - instead, start a conversation. Get answers and insights from PDFs instantly.
                    </p>

                    <Link href={'/dashboard'}>
                        <button className="bg-[#1e58eb] rounded-full sm:px-14 px-12 py-[2.5px] sm:py-4 text-white text-center text-[18px] sm:text-[20px] font-medium ">
                            Chat with Your PDF for Free
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default Header;
