import exp1 from "../assets/young.jpeg"
function Experience() {
  return (
    <section className="p-5 bg-[#111827]">

        <h1 className='headings border    text-sm font-medium'>Experience</h1>
        <div  data-aos="fade-up"
     data-aos-duration="1000">
        <p className="text-normal m-5 text-lg md:text-xl   text-center">Here is a quick summary of my most recent experiences:</p>
            <div className='rounded-xl bg-[#1F2937] flex sm:flex-row gap-1 flex-col items-center p-5  '>
                {/* Experience cards */}  
            <img  className="pr-[80px]" src={exp1} alt="" />
            <div className="md:w-[90%]  flex sm:flex-row gap-5 md:justify-around  flex-col ">
                <div>
                <h1 className="p-3  text-xl font-semibold">Title</h1>
                <p className="pl-3 w-[90%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium illo expedita asperiores beatae adipisci veritatis eaque cum, deserunt, iure explicabo reiciendis dolorem. Excepturi tenetur amet libero veniam aliquam reprehenderit quisquam.</p>
                </div>
            <p className=" w-[100%] pl-3 pt-3  ">Jan 2024-Feb 2024</p>
            </div>

            </div>
        </div>
    </section>
  )
}

export default Experience