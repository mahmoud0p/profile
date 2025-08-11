'use client'
import { NodeIcon } from './skillsIcons/node'
import { PostgresIcon } from './skillsIcons/postgresql'
import { BunIcon } from './skillsIcons/bun'
import { DenoIcon } from './skillsIcons/deno'
import { SocketIcon } from './skillsIcons/socket'
import { NeonIcon } from './skillsIcons/neon'
import { SupabaseIcon } from './skillsIcons/supabase'
import { NextIcon } from './skillsIcons/nextjs'
import { JotaiIcon } from './skillsIcons/Jotai'
import { ActixIcon } from './skillsIcons/Actix'
import { ReactIcon } from './skillsIcons/react'
import { TailwindIcon } from './skillsIcons/tailwind'
import { FramerMotionIcon } from './skillsIcons/framer'
import { ReduxIcon } from './skillsIcons/redux'
import { ShadcnIcon } from './skillsIcons/shadcn'
import { SvelteIcon } from './skillsIcons/svelte'
import { HtmlIcon } from './skillsIcons/html'
import { CssIcon } from './skillsIcons/css'
import {motion} from 'motion/react'
const Frameworks = () => {
    return (
        <motion.div 
                    initial={{opacity: 0 , x: 50}}
                    whileInView={{opacity: 1 , x: 0}}
                    transition={{duration: 0.8 , delay: 0.5}}
                    viewport={{once: true}}
                    className='flex flex-col  items-center  w-3/4 mx-auto  '
                >
                    <h3 className='text-2xl mx-auto relative'>
                        Frameworks and Libraries I have used
                        <span className='w-3/4 h-1 bg-[#DDDDDD] absolute top-full left-0'></span>
                    </h3>
                    <div>
                        <p className='text-sm mt-2 w-full text-center text-neutral-600 ml-7'>Click any icon to know what is it</p>
                        <div className='font-bold  items-center flex-wrap flex mt-10 gap-5'>
                            <h2 className='text-2xl font-medium tracking-wider underline decoration-1 decoration-cyan-500 italic underline-offset-2'>Frontend</h2>
                            <ReactIcon/>
                            <SvelteIcon/>
                            <HtmlIcon/>
                            <CssIcon/>
                            <TailwindIcon/>
                            <ReduxIcon/>
                            <JotaiIcon className='bg-[#DDDDDD] p-1 rounded-lg'/>
                            <ShadcnIcon/>
                            <FramerMotionIcon className='bg-[#DDDDDD] rounded-lg flex justify-center items-center p-1'/>
                        </div>

                        <div className='mt-10 items-center font-bold flex-wrap flex gap-5'>
                            <h2 className='text-2xl font-medium tracking-wider underline decoration-1 decoration-cyan-500 italic underline-offset-2'>Backend </h2>
                            <NodeIcon/>
                            <ActixIcon/>
                            <BunIcon/>
                            <DenoIcon/>
                            <SocketIcon/>
                            <PostgresIcon/>
                            <NeonIcon/>
                            <SupabaseIcon/>
                        </div>

                        <div className='mt-10 items-center flex-wrap flex gap-5'>
                            <h2 className='text-2xl tracking-wider underline decoration-1 font-medium decoration-cyan-500 italic underline-offset-2'>FullStack</h2>
                            <NextIcon className='bg-[#DDDDDD] rounded-lg flex justify-center items-center p-1'/>
                            <div className='py-1 px-2 bg-[#DDDDDD] rounded-lg text-black gap-2 flex items-center'><SvelteIcon className='size-7'/>SvelteKit</div>
                        </div>
                    </div>
                    
                </motion.div>
    )
}

export default Frameworks