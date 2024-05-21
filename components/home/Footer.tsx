import React from 'react';
import Logo from '../ui/Logo';
import Link from 'next/link';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <>
            <div className='bg-[#111827]'>
                <div className="container max-w-screen-xl mx-auto hidden w-full text-white sm:flex justify-between items-center px-4 py-[50px]">
                    <div className="max-width[338] flex flex-col justify-between gap-24">
                        <div>
                            <Link href={'/'} className="flex items-center mb-[30px]">
                                <span className="shadows text-primary text-[28px] sm:text-[28px]">
                                    PDF AI Chatbot
                                </span>
                            </Link>
                            <div data-color="1" className="text-[16px] text-[#ffffff]">Durable makes owning a business easier than having a job</div>
                        </div>
                        <div className="flex flex-col gap-y-[24px]">
                            <div data-color="2" className="font-size-16 color-gray-500">All rights reserved. © PDFAIChatbot {currentYear} </div>
                            <div data-color="1" className="flex-row gap-28">
                                <a aria-label="Facebook" href="https://www.facebook.com/DurableAI" target="_blank" className="w-inline-block">
                                    <div data-color="1" className="flex-row color-indigo-500 w-embed">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <g clipPath="url(#clip0_3117_1797)">
                                                <path d="M20 10C20 4.47715 15.5229 0 10 0C4.47715 0 0 4.47715 0 10C0 14.9912 3.65684 19.1283 8.4375 19.8785V12.8906H5.89844V10H8.4375V7.79688C8.4375 5.29063 9.93047 3.90625 12.2146 3.90625C13.3084 3.90625 14.4531 4.10156 14.4531 4.10156V6.5625H13.1922C11.95 6.5625 11.5625 7.3334 11.5625 8.125V10H14.3359L13.8926 12.8906H11.5625V19.8785C16.3432 19.1283 20 14.9912 20 10Z" fill="currentColor"></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_3117_1797">
                                                    <rect width="20" height="20" fill="white"></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="W-full">
                        <div className="flex flex-row">
                            <div></div>
                            <div>
                                <div>Product</div>
                                <div>
                                    <a href="/ai-assistant">AI Assistant</a>
                                    <a href="/ai-crm-small-business">CRM</a>
                                    <a href="/invoice-builder">Invoicing</a>
                                    <a href="/pricing">Pricing</a>
                                    <a href="/ai-website-builder" aria-current="page">Website builder</a>
                                    <a href="/ai-blog-generator">Blog builder</a>
                                    <a href="/ai-brand-builder">Brand builder</a>
                                </div>
                            </div>
                            <div>
                                <div>Resources</div>
                                <div>
                                    <a href="/blog">Blog</a>
                                    <a href="/perks">Perks</a>
                                    <a href="/state-guides">State guides</a>
                                    <a href="/website-builder-for-service-businesses">Industries</a>
                                    <a href="/guides">Starter guides</a>
                                    <a href="/website-templates">Website templates</a>
                                    <a href="/ai-tools">AI tools</a>
                                </div>
                            </div>
                            <div>
                                <div>Company</div>
                                <div>
                                    <a href="/about">About</a>
                                    <a href="/durable-affiliate-program">Affiliate program</a>
                                    <a href="/careers">Careers</a>
                                    <a href="/newsletter">Newsletter</a>
                                    <a href="/privacy-policy">Privacy&nbsp;policy</a>
                                    <a href="https://help.durable.co">Support</a>
                                    <a href="/terms-of-service">Terms of service</a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};

export default Footer;
