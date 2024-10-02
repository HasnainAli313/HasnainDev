import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiNodejsLine } from "react-icons/ri";
import { RiTailwindCssLine } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa6"
import { FaJs } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si"; 
import { BiLogoFirebase } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { FaGitAlt } from "react-icons/fa";

function Skills() {
  return (
   <section className='p-10'>
    <h1 className='headings border  text-sm font-medium'>Skills</h1>
    <div className=''>
        <p className=' m-5 text-normal text-lg md:text-xl   text-center'>The skills, tools and technologies I am really good at:</p>

        {/* icons */}
        <div data-aos="zoom-in"  className='flex gap-10 sm:gap-24 flex-wrap justify-evenly m-5'>
        <div>
        <FaHtml5  size={60} /> 
        <p className='text-center'>HTML</p>
        </div>
        <div>
        <FaCss3Alt size={60} />
        <p className='text-center'>CSS</p>
        </div>
        <div>
        <RiTailwindCssLine size={60} />
        <p className='text-center'>Tailwindcss</p>
        </div>
        <div>
        <FaBootstrap size={60} />
        <p className='text-center'>Bootstrap</p>
        </div>
        <div>
        <FaJs size={60} /> 
        <p className='text-center'>JavaScript</p>
        </div>
        <div>
          <FaReact size={60} />
        <p className='text-center'>React</p>
        </div>
        <div>
        <RiNodejsLine size={60} />
        <p className='text-center'>Node.js</p>
        </div>
        <div>
        <SiExpress size={60} />
        <p className='text-center'>Express.js</p>
        </div>
        <div>
        <BiLogoFirebase size={60} />
        <p className='text-center'>Firebase</p>
        </div>
        <div>
        <FaGithub size={60} />
        <p className='text-center'>Github</p>
        </div>
        <div>
        <FaGitAlt size={60} />
        <p className='text-center'>Git</p>
        </div>
        <div>
        <BiLogoMongodb size={60} />
        <p className='text-center'>MongoDB</p>
        </div>
        </div>
    </div>

   </section>
  )
}

export default Skills