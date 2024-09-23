"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const projects = [
    {
        num: '01',
        category: "frontend",
        title: "Project-1",
        description: "A responsive and dynamic web application built using HTML5, CSS3, and JavaScript. It features a clean, intuitive UI that provides a seamless user experience across various devices, including mobile and desktop. The project emphasizes responsive design principles and smooth user interactions.",
        stack: [
            { name: "HTML5" },
            { name: "CSS3" },
            { name: "JavaScript" }
        ],
        image: "/work/thumb1.png",
        live: "",
        github: "",
    },
    {
        num: '02',
        category: "Full Stack",
        title: "Project-2",
        description: "A full-stack web application built with Next.js on the frontend and Node.js on the backend. The UI is styled with Tailwind CSS to ensure responsiveness and modern design. This project handles both frontend and backend logic efficiently, with dynamic content rendering and API integration.",
        stack: [
            { name: "Next.js" },
            { name: "Tailwind.css" },
            { name: "Node.js" }
        ],
        image: "/work/thumb2.png",
        live: "",
        github: "",
    },
    {
        num: '03',
        category: "frontend",
        title: "Project-3",
        description: "This frontend application is built with Next.js and styled using Tailwind CSS. It is optimized for high performance, SEO, and responsiveness. The app showcases a modern design approach while ensuring a smooth and interactive user experience across different devices.",
        stack: [
            { name: "HTML5" },
            { name: "Tailwind.css" },
            { name: "Next.js" }
        ],
        image: "/work/thumb3.png",
        live: "",
        github: "",
    }
];

const Work = () => {
    const [project, setProject] = useState(projects[0]);

    const handleSlideChange = (swiper)=> {
        const currentIndex = swiper.activeIndex;
        setProject(projects[currentIndex]);
    }

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1,
            transition: {delay:2.4, duration: 0.4, ease: "easeIn"},
            }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h=[460px] flex flex-col xl:justify-between order-2 xl:order-none">
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">{project.num}</div>
                            <div>
                                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
                                <p className="text-white/60 my-4">{project.description}</p>
                                <ul className="flex gap-4 mb-4"> {/* Added margin-bottom for spacing */}
                                    {project.stack.map((item, index) => {
                                        return (
                                            <li key={index} className="text-xl text-accent">
                                                {item.name}
                                                {index !== project.stack.length - 1 && ","}
                                            </li>
                                        );
                                    })}
                                </ul>
                                <div className="border border-white/20 mb-4"></div> {/* Added margin-bottom for spacing */}
                                <div className="flex items-center gap-4">
                                    <Link href={project.live}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                    <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>Live Projects</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                                    <Link href={project.github}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                                                    <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>GitHub Repository</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                    <Swiper
                    spaceBetween={30}
                    slidesPerView={1}
                    className="xl:h-[520px] mb-12 relative"
                    onSlideChange={handleSlideChange}>
                        {projects.map((project, index)=>{
                            return <SwiperSlide key={index} className="w-full">
                                <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                {/* overlay */}
                                <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                {/* image */}
                                <div className="relative w-full h-full">
                                    <Image src={project.image} fill className="object-cover" alt=""/>
                                </div>
                                </div>
                                </SwiperSlide>
                        })}
                        <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                        btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"/>
                    </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Work;
