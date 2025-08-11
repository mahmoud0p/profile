'use client'
import Projects from "./components/Projects";
import Skills from "./components/skills";
import {Contact} from "./components/Contact";
import Copyright from "./components/copyright";
import Frameworks from "./components/Frameworks";
import { Main } from "./components/Main";
export default function Home() {
  
  
  return (
    <>
      <title>Mahmoud Samir</title>
      <Main/>
      <Projects/>
      <hr className=' border-none h-[1px] bg-gradient-to-r via-neutral-900 w-full my-20 md:mt-10'/>
      <Skills/>
      <hr className=' border-none h-[1px] bg-gradient-to-r via-neutral-900 w-full mb-10'/>
      <Frameworks/>
      <hr className=' border-none h-[1px] bg-gradient-to-r via-neutral-900 w-full mt-10'/>
      <Contact/>
      <Copyright/>
    </>
  );
}