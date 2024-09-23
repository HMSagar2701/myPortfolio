"use client";
import { FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaEthereum } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiSolidity } from "react-icons/si";



const about = {
    title: 'About Me',
    description: "Experienced Full Stack Developer with expertise in web development and DevOps practices.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "H M Sagar"
        },
        {
            fieldName: "Phone",
            fieldValue: "(+91) 9663597705"
        }, {
            fieldName: "Experience",
            fieldValue: "2+ Years"
        }, {
            fieldName: "Nationality",
            fieldValue: "Indian"
        }, {
            fieldName: "Email",
            fieldValue: "sagarhm2701@gmail.com"
        }, {
            fieldName: "Freelance",
            fieldValue: "Available"
        }, {
            fieldName: "Languages",
            fieldValue: "English, Kannada"
        },
    ]
}

const experience = {
    icons: '/assests/resume/badge.svg',
    title: 'My Experience',
    description: "Full Stack Developer with experience migrating 15+ applications to Azure, reducing costs by 30% and increasing deployment speed by 40%. Utilized Terraform to set up 50+ Azure resources for scalable deployments and automated various tasks using GitLab CI/CD and Ansible, cutting manual work by 60%.",
    items: [
        {
            company: "Wipro Technologies",
            position: "Software Engineer",
            duration: "Sept 2022-Present",
        },
        {
            company: "Wipro Technologies",
            position: "Software Intern",
            duration: "Jan 2022- July-2022",
        },

    ]
}


const education = {
    icons: '/assests/resume/cap.svg',
    title: 'My Education',
    description: "A summary of my educational qualifications and certifications",
    items: [
        {
            institution: "BITM, Ballari, Karnataka",
            degree: "Bachelor of Engineering",
            duration: "June 2018 - June 2022"
        },
        {
            institution: "Great Learning",
            degree: "Java FSD Certified",
            duration: "07/2022"
        },
        {
            institution: "Koeing Solutions",
            degree: "DevOps Begineer to Advance Certified",
            duration: "10/2022"
        },
        {
            institution: "AWS",
            degree: "AWS Certified Cloud Practitioner",
            duration: "07/2023"
        }

    ]
}

const skills = {
    icons: '/assets/resume/skills.svg',
    title: 'My Skills',
    description: "A collection of my technical skills and proficiencies.",
    skillList: [
        { icon: <FaHtml5 />, name: "HTML5" },
        { icon: <FaCss3 />, name: "CSS3" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <FaReact />, name: "React" },
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <FaJs />, name: "Web3" },
        { icon: <FaEthereum />, name: "Ethereum" },
        { icon: <SiSolidity />, name: "Solana" }
    ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@radix-ui/react-tooltip";
import { motion } from "framer-motion";
import { ScrollArea } from "@radix-ui/react-scroll-area";


const Resume = () => {
    return <motion.div initial={{ opacity: 0 }} animate={{
        opacity: 1, transition: {
            delay: 2.4, duration: 0.4, ease: "easeIn"
        }
    }}
        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
        <div className="container mx-auto">
            <Tabs defaultValue="experience"
                className="flex flex-col xl:flex-row gap-[60px]"
            >
                <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
                    <TabsTrigger value="experience">Experience</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                    <TabsTrigger value="about">About Me</TabsTrigger>
                </TabsList>

                <div className="min-h-[70vh] w-full">
                    <TabsContent value="experience" className="w-full">
                        <div className="flex flex-col gap-[30px] text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{experience.title} </h3>
                            <p className="max-w-[680px] text-white/60 mx-auto xl:mx-0">
                                {experience.description}
                            </p>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {experience.items.map((item, index) => {
                                        return (
                                            <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.company}</p>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>
                    <TabsContent value="education" className="w-full"><div className="flex flex-col gap-[30px] text-center xl:text-left">
                        <h3 className="text-4xl font-bold">{education.title} </h3>
                        <p className="max-w-[680px] text-white/60 mx-auto xl:mx-0">
                            {education.description}
                        </p>
                        <ScrollArea className="h-[400px]">
                            <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                {education.items.map((item, index) => {
                                    return (
                                        <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                            <span className="text-accent">{item.duration}</span>
                                            <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.degree}</h3>
                                            <div className="flex items-center gap-3">
                                                <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                <p className="text-white/60">{item.institution}</p>
                                            </div>
                                        </li>
                                    );
                                })}
                            </ul>
                        </ScrollArea>
                    </div></TabsContent>
                    <TabsContent value="skills" className="w-full h-full">
                        <div className="flex flex-col gap-[30px]">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{skills.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                            </div>
                            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                {skills.skillList.map((skill, index) => {
                                    return (<li key={index}>
                                        <TooltipProvider delayDuration={100}>
                                            <Tooltip>
                                                <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                    <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>{skill.name}</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                    </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </TabsContent>
                    <TabsContent
                        value="about"
                        className="w-full text-center xl:text-left"
                    >
                        <div className="flex flex-col gap-[38px]">
                            <h3 className="text-4xl font-bold">{about.title}</h3>
                            <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                {about.description}
                            </p>
                            <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[1000px] mx-auto xl:mx-0">
                                {about.info.map((item, index) => {
                                    return (
                                        <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                            <span className="text-white/60">{item.fieldName}</span>
                                            <span className="text-xl">{item.fieldValue}</span>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </TabsContent>

                </div>
            </Tabs>
        </div>

    </motion.div>
}

export default Resume;
