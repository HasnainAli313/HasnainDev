import pizza from "../assets/pizza.png"
import { FaExternalLinkAlt } from "react-icons/fa";
function Work() {
  return (
    <section id="work" className="p-5">
        <h1 className='headings border    text-sm font-medium'>Work</h1>
        <div>
        <p className="text-normal m-5 text-lg md:text-xl   text-center">Some of the noteworthy projects I have built:</p>

        <div data-aos="fade-up"
     data-aos-anchor-placement="top-bottom" className="flex md:flex-nowrap rounded-xl flex-wrap justify-evenly ">
            {/* img */}
            <div className="bg-[#374151] rounded-xl md:w-[90%] p-5">
                <img className=" transition-transform duration-500  md:hover:scale-105 md:h-[230px]   " src={pizza} alt="" />
            </div>
            {/* Description */}
            <div className="bg-[#1F2937]  p-5  rounded-xl" >
                <h1 className="text-xl m-1 font-semibold">Pizza Delivery </h1>
                A platform for comparing and finding affordable flights, as well as booking and purchasing tickets safely and easily in a few simple clicks.
                <div className="flex gap-5 m-3" >
                    <p className="tags  text-sm font-medium">React</p>
                    <p className="tags  text-sm font-medium">Tailwindcss</p>
                    <p className="tags  text-sm font-medium">firebase</p>
                </div>
                <a  className="m-[1px]" href="https://hasnainali313.github.io/pizza-delivery/">
                <FaExternalLinkAlt className="hover:scale-[1.1] hover:transition-all delay-300" />
                </a>
            </div>
        </div>

        </div>
    </section>
  )
}

export default Work