import pizza from "../assets/pizza.png"
import chief from "../assets/chief.png"
import quiz from "../assets/dynamicquiz.png"
import { FaExternalLinkAlt } from "react-icons/fa";
function Work() {
  return (
    <section id="work" className="p-5">
        <h1 className='headings border    text-sm font-medium'>Work</h1>
        <div>
        <p className="text-normal m-5 text-lg md:text-xl   text-center">Some of the noteworthy projects I have built:</p>

     {/* Project 1 */}
        <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className="flex md:flex-nowrap rounded-xl flex-wrap justify-evenly ">
            {/* img */}
            <div className="bg-[#374151] rounded-xl rounded-b-none lg:rounded-r-none md:w-[90%] p-5">
                <img className=" transition-transform duration-500  md:hover:scale-105 md:h-[230px] rounded-lg  " src={pizza} alt="" />
            </div>
            {/* Description */}
            <div className="bg-[#1F2937] lg:rounded-l-none rounded-t-none  p-5 lg:w-[90%]  w-[100%]  rounded-xl" >
                <h1 className="text-xl m-1 font-semibold"> Pizza Delivery </h1>
                <p>
                A platform for ordering pizza
                </p>
                <div className="flex gap-5 m-3" >
                    <p className="tags  text-sm font-medium">React</p>
                    <p className="tags  text-sm font-medium">Tailwindcss</p>
                </div>
                <a  className="m-[1px]" href="https://hasnainali313.github.io/pizza-delivery/">
                <FaExternalLinkAlt className="hover:scale-[1.1] hover:transition-all delay-300" />
                </a>
            </div>
        </div>

        {/* Project 2 */}
        <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className="flex md:flex-nowrap rounded-xl mt-5 flex-wrap justify-evenly ">
            {/* img */}
            <div className="bg-[#374151] rounded-xl rounded-b-none lg:rounded-r-none lg:w-[90%] p-5">
                <img className=" transition-transform duration-500  md:hover:scale-105 md:h-[230px] rounded-lg  " src={chief} alt="" />
            </div>
            {/* Description */}
            <div className="bg-[#1F2937] lg:rounded-l-none rounded-t-none p-5  lg:w-[90%]  rounded-xl" >
                <h1 className="text-xl m-1 font-semibold">Chief Grill </h1>
                <p>A platform for where you can find various fast foods, and other more dishes and select the one which you want and order it right now or cart it for later order</p>
                <div className="flex gap-5 m-3" >
                    <p className="tags  text-sm font-medium">React</p>
                    <p className="tags  text-sm font-medium">Tailwindcss</p>
                </div>
                <a  className="m-[1px]" href="https://chief-grill.vercel.app/">
                <FaExternalLinkAlt className="hover:scale-[1.1] hover:transition-all delay-300" />
                </a>
            </div>
        </div>

        {/* Project 3 */}
        <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className="flex md:flex-nowrap rounded-xl  mt-5 flex-wrap justify-evenly ">
            {/* img */}
            <div className="bg-[#374151] rounded-xl rounded-b-none lg:rounded-r-none lg:w-[90%] p-5">
                <img className=" transition-transform duration-500  md:hover:scale-105 md:h-[230px] rounded-lg  " src={quiz} alt="" />
            </div>
            {/* Description */}
            <div className="bg-[#1F2937] lg:rounded-l-none  rounded-t-none p-5  lg:w-[90%]  rounded-xl" >
                <h1 className="text-xl m-1 font-semibold">Dynamic Quiz </h1>
                <p>A platform for where you can find various fast foods, and other more dishes and select the one which you want and order it right now or cart it for later order</p>
                <div className="flex gap-5 m-3" >
                    <p className="tags  text-sm font-medium">React</p>
                    <p className="tags  text-sm font-medium">Tailwindcss</p>
                </div>
                <a  className="m-[1px]" href="https://dynamic-quiz-game.vercel.app/">
                <FaExternalLinkAlt className="hover:scale-[1.1] hover:transition-all delay-300" />
                </a>
            </div>
        </div>

        </div>
    </section>
  )
}

export default Work