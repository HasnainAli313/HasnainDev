import profile from "../assets/Pic2.png";
import { IoLocationOutline } from "react-icons/io5";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { LiaGithub } from "react-icons/lia";
import { TiSocialInstagramCircular } from "react-icons/ti";
import { AiFillTwitterCircle } from "react-icons/ai";

function Hero() {
  return (
    <section className="hero flex justify-around p-10">
      <div data-aos="fade-right" className="hero-details md:w-2/4 ">
        <h1 className="text-4xl font-semibold md:font-bold md:text-5xl md:tracking-[-0.02em] lg:text-6xl lg:leading-[72px] text-gray-50">
          Hi, I'm Hasnain <span>👋</span>
        </h1>
        <p className="mt-[10px] text-xl">
          I am a Frontend Web Developer specializing in creating intuitive and
          dynamic user interfaces using HTML, CSS, JavaScript, React, and
          Tailwind CSS. I have developed multiple real-world projects that
          demonstrate my ability to build responsive, high-quality web
          applications.
        </p>

        {/* Location */}
        <div className="flex w-[300px] mt-8 ml-1 items-center gap-3 ">
          <IoLocationOutline size={30} />{" "}
          <p className="text-xl">Nowshera, Pakistan</p>
        </div>

        {/* social media */}
        <div className="flex gap-1 mt-5">
          <a
            className=" hover:animate-pulse"
            href="https://linkedin.com/in/HasnainAli313"
            target="_blank"
          >
            <TiSocialLinkedinCircular size="40" />
          </a>
          <a
            className=" hover:animate-pulse"
            href="https://Github.com/HasnainAli313"
            target="_blank"
          >
            <LiaGithub size="40" />
          </a>
          <a
            className=" hover:animate-pulse"
            href="https://instagram.com/HasnainAli_313"
            target="_blank"
          >
            <TiSocialInstagramCircular size="40" />
          </a>
          <a
            className=" hover:animate-pulse"
            href="https://twitter.com/AliOkzOfficial"
            target="_blank"
          >
            <AiFillTwitterCircle size="40" />
          </a>
        </div>
      </div>
      <div data-aos="zoom-in-up">
        <img className="w-52 " src={profile} alt="Profile pic" />
      </div>
    </section>
  );
}

export default Hero;
