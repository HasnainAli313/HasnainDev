import biopic from "../assets/biopic.JPG"

function Aboutme() {
  return (
    <section  id="about" className="bg-[#111827] p-5 sm:p-10">
        <h1 className='headings  border  text-sm font-medium'>About me</h1>
        <div data-aos="fade-up" className="mt-5 flex  flex-wrap justify-around">
            <img className="sm:w-[28%]  " src={biopic} alt="Bio Profile" />
        <div className=" w-[100%] sm:w-[50%]">
            <h3 className="text-2xl md:text-3xl  font-semibold tracking-[-0.02em] text-gray-50 sm:mt-0 mt-10 mb-5">Curious about me? Here you have it:</h3>
            <p className="">
I am a passionate Frontend Web Developer with a keen interest in creating intuitive and dynamic user interfaces. Currently, I am expanding my skill set by learning the  <strong>MERN</strong> (MongoDB, Express.js, React and Node.js). Throughout my learning journey, I have developed numerous projects that showcase my ability to integrate modern web technologies and deliver seamless user experiences. My dedication to continuous learning and my hands-on experience with various projects have equipped me with a solid foundation in both frontend and full-stack development.
</p>
<p className="mt-5">I am currently a student at the <strong>University of Peshawar</strong>, where I am further honing my technical skills and theoretical knowledge. My academic journey has provided me with a strong understanding of computer science principles, which I apply to my development projects. I am eager to work in a collaborative team environment where I can contribute my skills and learn from experienced professionals. I thrive in settings that encourage innovation and teamwork, and I am excited about the opportunity to grow and make meaningful contributions to impactful projects.</p>
        </div>
        </div>
    </section>
  )
}

export default Aboutme