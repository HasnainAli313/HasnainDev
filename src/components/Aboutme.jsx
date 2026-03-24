import biopic from "../assets/biopic.JPG";

function Aboutme() {
  return (
    <section id="about" className="bg-[#111827] p-5 sm:p-10">
      <h1 className="headings  border  text-sm font-medium">About me</h1>
      <div data-aos="fade-up" className="mt-5 flex  flex-wrap justify-around">
        <img className="sm:w-[28%]  " src={biopic} alt="Bio Profile" />
        <div className=" w-[100%] sm:w-[50%]">
          <h3 className="text-2xl md:text-3xl  font-semibold tracking-[-0.02em] text-gray-50 sm:mt-0 mt-10 mb-5">
            Curious about me? Here you have it:
          </h3>
          <p className="">
            I am a results-driven Frontend Web Developer with a strong focus on
            building intuitive, responsive, and dynamic user interfaces. I
            specialize in modern web technologies including HTML, CSS,
            JavaScript, Tailwind CSS, and React, and consistently develop
            real-world applications that reflect my practical expertise and
            problem-solving abilities. I have experience integrating modern
            frontend and backend technologies to deliver seamless and scalable
            web solutions. With hands-on experience in the MERN stack (MongoDB,
            Express.js, React, Node.js), I am capable of contributing across
            both frontend and backend development. I am passionate about
            building high-quality digital products and thrive in collaborative
            environments where innovation and teamwork are valued. I am eager to
            contribute my skills to impactful projects and continuously enhance
            my expertise as a developer.
          </p>
          <p className="mt-5">
            I am a BSCS Graduate from the <strong>University of Peshawar</strong>, where I built
            a strong foundation in computer science principles. During
            my studies, I completed a Final Year Project that allowed me to
            apply my technical knowledge to a real-world application,
            strengthening my skills in problem-solving, coding, and project
            management. I am eager to work in a collaborative team environment
            where I can contribute my expertise, tackle challenging projects,
            and continue delivering high-quality, impactful solutions.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Aboutme;
