'use client';

import Link from 'next/link';
import Image from "next/image";
import { useEffect, useRef, useState } from 'react';

// 静态的客户评价数据
const testimonials = [
    {
        name: 'Jonathan Miller',
        content: "Instead of spending hours digging through lengthy documents, I can now quickly find specific clauses and terms with just a few simple queries.",
        role: 'Senior Partner',
        unit: 'Miller & Associates',
        img: '/image/CustomersReview-Jonathan Miller.jpg',
        imgalt: "Jonathan Miller - Instead of spending hours digging through lengthy documents, I can now quickly find specific clauses and terms with just a few simple queries.",
        tags: ['#PDFAI', '#PDFCHAT']
    },
    {
        name: 'Emily Roberts',
        content: "Finding information in PDFs used to be a huge headache. Since I started using XXX, it's so much easier. I just type in a question and it gives me the exact info I need. My students love that I can answer their questions quickly!",
        role: 'Teacher',
        unit: 'Lincoln High School',
        img: '/image/CustomersReview-Emily Roberts.jpg',
        imgalt: "Emily Roberts - Finding information in PDFs used to be a huge headache. Since I started using XXX, it's so much easier. I just type in a question and it gives me the exact info I need. My students love that I can answer their questions quickly!",
        tags: ['#PDFCHAT', '#DocumentChat', '#PDFAI']
    },
    {
        name: 'Sarah Thompson',
        content: "Being able to quickly summarize a long PDF has been a lifesaver. XXX lets me get the key points without reading every page. It’s great because now I have more time for my clients, and they really appreciate that.",
        role: 'Financial Advisor',
        unit: 'Thompson Wealth Management',
        img: '/image/CustomersReview-Sarah Thompson.jpg',
        imgalt: "Sarah Thompson - Being able to quickly summarize a long PDF has been a lifesaver. XXX lets me get the key points without reading every page. It’s great because now I have more time for my clients, and they really appreciate that.",
        tags: ['#AIInteraction', '#TechTools', '#EfficientReading']
    },
    {
        name: 'David Hernandez',
        content: "XXX is the best thing that happened to my workflow. Normally, I'd spend ages flipping through PDFs, but with this AI tool, I just ask it what I need to know, and it points me to the exact spot. No more endless scrolling! If you work with PDFs, you NEED this.",
        role: 'Research Analyst',
        unit: 'Global Insights Inc',
        img: '/image/CustomersReview-David Hernandez.jpg',
        imgalt: "David Hernandez - XXX is the best thing that happened to my workflow. Normally, I'd spend ages flipping through PDFs, but with this AI tool, I just ask it what I need to know, and it points me to the exact spot. No more endless scrolling! If you work with PDFs, you NEED this.",
        tags: ['#PDFInsights', '#ProfessionalEfficiency', '#PDFCHAT']
    },
    {
        name: 'Emma Davis',
        content: "XXX is super easy to use. I'm not the most tech-savvy person, but even I figured it out right away. My deadlines don't feel as stressful now, and my editor's thrilled with how fast I can turn things around.",
        role: 'Freelance Writer',
        unit: 'Creative Pens Publishing',
        img: '/image/CustomersReview-Emma Davis.jpg',
        imgalt: "Emma Davis - XXX is super easy to use. I'm not the most tech-savvy person, but even I figured it out right away. My deadlines don't feel as stressful now, and my editor's thrilled with how fast I can turn things around.",
        tags: ['#TechTools', '#SmartPDF', '#AIReader']
    },
    {
        name: 'Ethan Reynolds',
        content: "Being a student is tough, especially when you're drowning in papers. But XXX's like having a super-smart buddy to help you out whenever you're stuck. Sure, it's not flawless, but it's a real time-saver. If you're in the same boat, definitely give it a shot!",
        role: 'Student',
        unit: 'UC Berkeley',
        img: '/image/CustomersReview-Ethan Reynolds.jpg',
        imgalt: "Ethan Reynolds - Being a student is tough, especially when you're drowning in papers. But XXX's like having a super-smart buddy to help you out whenever you're stuck. Sure, it's not flawless, but it's a real time-saver. If you're in the same boat, definitely give it a shot!",
        tags: ['#EfficientReading', '#StudentAid', '#PDFAI', '#PDFCHAT']
    },
];

const CustomersReview = () => {
    const carouselRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0); // 当前显示的页
    const itemsPerPage = 3; // 每页显示的项目数量
    const totalPages = Math.ceil(testimonials.length / itemsPerPage); // 总页数

    useEffect(() => {
        // 自动轮播
        const interval = setInterval(() => {
            handleNext();
        }, 3000);

        return () => clearInterval(interval);
    }, [currentSlide]);

    const handleNext = () => {
        // 点击右箭头
        const newSlide = (currentSlide + 1) % totalPages;
        setCurrentSlide(newSlide);
    };

    const handlePrev = () => {
        // 点击左箭头
        const newSlide = (currentSlide - 1 + totalPages) % totalPages;
        setCurrentSlide(newSlide);
    };


    useEffect(() => {
        // 更新滚动位置
        const carousel = carouselRef.current;
        if (carousel) {
            carousel.scrollTo({
                left: carousel.offsetWidth * currentSlide,
                behavior: 'smooth',
            });
        }
    }, [currentSlide]);

    return (
        <>
            <div className="bg-[#ffffff]">
                <div className="container max-w-screen-xl mx-auto pt-[70px]">
                    <div className="max-w-[968px] text-center mx-auto">
                        <h2 className="text-[48px] capitalize leading-[65px] text-[#212B36] font-[600] pb-[20px]">Customers Love XXX!</h2>
                        <p className="text-[18px] capitalize text-[#6d7c90]">We understand how challenging it can be to work with PDFs, which is why we've created AI PDF chat features that users love! It’s all about making it easier for you to work with documents.</p>
                    </div>

                    <div className="relative mt-[40px] px-[60px]" onMouseEnter={() => document.querySelector('.carousel-controls').classList.remove('hidden')} onMouseLeave={() => document.querySelector('.carousel-controls').classList.add('hidden')}>
                        <div ref={carouselRef} className="carousel flex overflow-x-hidden scroll-smooth">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="carousel-item flex-shrink-0 w-[370px] bg-white rounded-[30px] border border-gray-200 shadow-custom m-2">
                                    <div className="flex flex-col p-[32px] full-height">
                                        <div className="flex gap-4 justify-start items-center">
                                            <div className="w-[40px] h-[40px] flex-shrink-0 overflow-hidden rounded-[360px] border-2 border-solid border-[#1e58eb]">
                                                <Image src={testimonial.img} alt={testimonial.imgalt} width={40} height={40} className="object-cover" />
                                            </div>
                                            <div className="flex flex-col gap-4">
                                                <div className="text-[16px] font-[600] pb-[2px]">{testimonial.name}</div>
                                                <div className="text-[12px] text-[#7c7c7c] leading-[14px]">{testimonial.role}, {testimonial.unit}</div>
                                            </div>
                                        </div>

                                        <div className="inline">
                                            <div className="inline">"</div>
                                            <div className="inline">{testimonial.content}</div>
                                            <div className="inline">"</div>
                                        </div>

                                        <div className="mt-auto"> {/* 确保这部分内容始终在底部 */}
                                            {Array.isArray(testimonial.tags) && testimonial.tags.map((tags, tagIndex) => (
                                                <span key={tagIndex} className="text-[#1e58eb] pr-[5px]">
                                                    {tags}
                                                    {tagIndex !== testimonial.tags.length - 1 && ' '}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="carousel-controls hidden absolute top-0 left-0 right-0 bottom-0 flex justify-between items-center">
                            <button onClick={handlePrev} className="bg-gray-200 p-2 rounded-full mx-4"> &lt; </button>
                            <button onClick={handleNext} className="bg-gray-200 p-2 rounded-full mx-4"> &gt; </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CustomersReview;
