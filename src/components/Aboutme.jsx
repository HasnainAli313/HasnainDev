import biopic from "../assets/biopic.JPG"

function Aboutme() {
  return (
    <section  id="about" className="bg-[#111827] p-5 sm:p-10">
        <h1 className='headings  border  text-sm font-medium'>About me</h1>
        <div data-aos="fade-up" className="mt-5 flex  flex-wrap justify-around">
            <img className="sm:w-[28%]  " src={biopic} alt="Bio Profile" />
        <div className=" w-[100%] sm:w-[50%]">
            <h3 className="text-2xl md:text-3xl  font-semibold tracking-[-0.02em] text-gray-50 sm:mt-0 mt-10 mb-5">Curious about me? Here you have it:</h3>
            <p className="">I'm a passionate, self-proclaimed designer who specializes in full stack development (React.js & Node.js). I am enthusiastic about bringing the technical and visual aspects of digital products to life. User experience, pixel perfect design, and writing clear, readable, highly performant code matters to me.

I began my journey as a web developer in 2015, and since then, I've continued to grow and evolve as a developer, taking on new challenges and learning the latest technologies along the way. Now, in my early thirties, 7 years after starting my web development journey, I'm building cutting-edge web applications using modern technologies such as Next.js, TypeScript, Nestjs, Tailwindcss, Supabase and much more.

I am very much a progressive thinker and enjoy working on products end to end, from ideation all the way to development.

When I'm not in full-on developer mode, you can find me hovering around on twitter or on indie hacker, witnessing the journey of early startups or enjoying some free time. You can follow me on Twitter where I share tech-related bites and build in public, or you can follow me on GitHub.

Finally, some quick bits about me.

B.E. in Computer Engineering
Full time freelancer
Avid learner
Aspiring indie hacker
One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉</p>
        </div>
        </div>
    </section>
  )
}

export default Aboutme