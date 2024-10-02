
import zeek from "../assets/zeek.jpeg"
function Testimonials() {
  return (
    <section id="testimonial" className="bg-[#111827] p-5">
        <h1 className="headings border    text-sm font-medium">Testimonials</h1>
        <div>
        <p className="text-normal m-5 text-lg md:text-xl   text-center">Nice things people have said about me:</p>
        {/* Cards */}
        <div data-aos="fade-up"
     data-aos-anchor-placement="center-bottom" >
            {/* card 1 */}
            <div className=" bg-[#1F2937] rounded-xl text-center gap-2 flex flex-col place-items-center p-12 md:h-[400px] md:w-[28%]">
               <img className=" w-[65px] rounded-[50%]" src={zeek} alt="" />
               <p className="  text-left">"Job well done! I am really impressed. He is very very good at what he does:) I would recommend Hasnain and will rehire in the future for Frontend development."</p>
               <h1 className="font-semibold">Zakarya Khan Yousafzai </h1>
               <p className="text-sm ">CEO - Nexiqor Private Limited</p>
            </div>
        </div>
        </div>
    </section>
  )
}

export default Testimonials