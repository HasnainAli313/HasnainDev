import cert1 from "../assets/fcc_secondary_large.jpg"
import cert2 from "../assets/js.jpeg"
import cert3 from "../assets/ux.jpeg"
function Certification() {
  return (
    <section className="p-5 bg-[#111827]">

        <h1 className='headings border    text-sm font-medium'>Certificates</h1>
        <p className="text-normal m-5 text-lg md:text-xl   text-center">Here is a quick summary of my most recent certification:</p>
        <div  data-aos="fade-up"
     data-aos-duration="1000">
            <div className='rounded-xl bg-[#1F2937] flex sm:flex-row gap-1 flex-col items-center p-5   '>
                {/* Experience cards */}  
            <img  className="pr-[80px] w-[300px] " src={cert1} alt="" />
            <div className="md:w-[90%]  flex sm:flex-row gap-5 md:justify-around  flex-col ">
                <div>
                <h1 className="p-3  text-xl font-semibold">Responsive Web Design</h1>
                <p className="pl-3 w-[90%]">In this certification I have learned HTML and CSS in depth.</p>
                </div>
            <p className=" w-[100%] pl-3 pt-3  ">Oct 2 2023</p>
            </div>
            </div>

            {/* JS */}
            <div className='rounded-xl bg-[#1F2937] flex sm:flex-row gap-1 flex-col items-center p-5  mt-2'>
                {/* Experience cards */}  
            <img  className="pr-[80px] w-[300px] " src={cert2} alt="" />
            <div className="md:w-[90%]  flex sm:flex-row gap-5 md:justify-around  flex-col ">
                <div>
                <h1 className="p-3  text-xl font-semibold">Programming with JavaScript</h1>
                <p className="pl-3 w-[90%]">In this certification I have learned JavaScript in depth.</p>
                </div>
            <p className=" w-[100%] pl-3 pt-3  ">Aug 31 2023</p>
            </div>
            </div>

            {/* UX*/}
            <div className='rounded-xl bg-[#1F2937] flex sm:flex-row gap-1 flex-col items-center p-5  mt-2'>
                {/* Experience cards */}  
            <img  className="pr-[80px] w-[300px] " src={cert3} alt="" />
            <div className="md:w-[90%]  flex sm:flex-row gap-5 md:justify-around  flex-col ">
                <div>
                <h1 className="p-3  text-xl font-semibold">Foundations of User Experience (UX) Design</h1>
                <p className="pl-3 w-[90%]">In this certification I have introduce to UX designing, learned how to develop websites that are User Centered.</p>
                </div>
            <p className=" w-[100%] pl-3 pt-3  ">Aug 26, 2024</p>
            </div>
            </div>

        </div>
    </section>
  )
}

export default Certification