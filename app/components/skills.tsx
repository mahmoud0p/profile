'use client'
import { Typescript } from './skillsIcons/Typescript'
import { RustIcon } from './skillsIcons/rust'
import { CPP } from './skillsIcons/cpp'

import {   motion } from 'motion/react'
import { splitWordIntoChars } from '../utils/splitwordintochars'

const Skills = () => {

    

    const text = "Hi there! Iam a really excited web developer who loves making websites. I have been doing this for over 5 years, and I enjoy learning new things to make my websites faster and nicer to look at. I have worked on many different projects, from simple personal sites to more complicated apps. Each time I work on a project, I get better at what I do and try to find new ways to make things easier for people to use. I have spent a lot of time learning and practicing so I can keep up with all the new tools and tricks in web development. I can work on both the parts of a website you see (frontend) and the behind-the-scenes parts (backend). I am proud to make websites that look great and work well on all kinds of devices, so everyone can have a good time using them!"
    const textChars = splitWordIntoChars(text) ; 

    return (
        <section  className='w-full sm:p-5 p-2 md:p-0 sm:w-3/4 mx-auto   flex items-center flex-col'>
            <div className='w-full  pt-10 md:p-0 box-border flex flex-col items-center justify-center top-0'>
                <div className="w-full perspective-1000">
                    <motion.h3 
                        className='text-2xl w-fit mx-auto relative'
                    >
                        About
                        <span className='w-3/4 bg-[#DDDDDD] h-1 absolute top-full left-0'></span>
                    </motion.h3>
                    <div 
                        className='text-md text-neutral-300 mt-5 leading-relaxed'
                    >
                        {textChars.map((char, index) => (
                            <motion.span 
                                key={index} 
                                initial={{ opacity: 0 , y: 10 }}
                                whileInView={{ opacity: 1 , y: 0 }}
                                transition={{ duration: 0.3 , delay: index * 0.01 }}
                                viewport={{ once: true }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </div>
                </div>

                <motion.div 
                    className='flex gap-1 sm:gap-3 md:gap-6 lg:gap-10 my-10'
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <motion.div 
                        transition={{ type: "spring", stiffness: 200 }}
                        className="hover:shadow-lg  p-4 rounded-xl"
                        whileInView={{scale:1 , opacity:1}}
                        initial={{scale:0 , opacity:0}} 
                        viewport={{once: true}}
                    >
                        <Typescript className='lg:size-24 size-10 sm:size-16 md:size-20'/>
                    </motion.div>
                    <motion.div 
                        transition={{ type: "spring", stiffness: 200 , delay:0.1 }}
                        className="hover:shadow-lg  p-4 rounded-xl"
                        whileInView={{scale:1 , opacity:1}}
                        initial={{scale:0 , opacity:0}} 
                        viewport={{once: true}}

                    >
                        <RustIcon  className='lg:size-24 size-10 sm:size-16 md:size-20'/>
                    </motion.div>
                    <motion.div 
                        transition={{ type: "spring", stiffness: 200 ,delay:0.2}}
                        className="hover:shadow-lg  p-4 rounded-xl"
                        whileInView={{scale:1 , opacity:1}}
                        initial={{scale:0 , opacity:0}} 
                        viewport={{once: true}}

                    >
                        <CPP  className='lg:size-24 size-10 sm:size-16 md:size-20'/>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}



export default Skills