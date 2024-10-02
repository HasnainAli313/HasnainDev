import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa"; 
import { TiSocialInstagramCircular, TiSocialLinkedinCircular } from "react-icons/ti";
import { LiaGithub } from "react-icons/lia";
import { AiFillTwitterCircle } from "react-icons/ai";
function Contact() {
  return (
    <section id="contact" className="p-5">
        <h1 className="headings border    text-sm font-medium">Get in touch</h1>
        <p className=" md:text-lg  m-auto p-5 md:w-[600px] text-center ">What’s next? Feel free to reach out to me if you are looking for a developer, have a query, or simply want to connect.</p>
        {/* Contacts */}
        <div  data-aos="fade-up"
     data-aos-duration="3000" className="flex flex-col gap-5 items-center">
        <div className="flex place-items-center gap-2 ">
        <MdEmail size={35} />
        <a className=" md:text-4xl font-semibold tracking-[-0.02em] " href="mailto:aliorakzai407@gmail.com">aliorakzai407@gmail.com</a>
        </div>
        <div className="flex place-items-center gap-2 ">
        <FaPhoneAlt size={35} />
        <a className="text-xl md:text-4xl font-semibold tracking-[-0.02em] " href="https://wa.me/+923150507755">+92 3150507755</a>
        </div>

        {/* Social */}
        <div className="m-3">
          <p className=" md:text-xl text-sm text-center">You may also find me on these platforms!</p>
  <div className=' justify-center flex gap-1 p-2'>
  <a className=' hover:animate-pulse' href="https://linkedin.com/in/HasnainAli313" target='_blank'>
<TiSocialLinkedinCircular size="35"/>
  </a>
<a className=' hover:animate-pulse' href="https://Github.com/HasnainAli313" target='_blank'>
<LiaGithub size="35" />
</a>
<a className=' hover:animate-pulse' href="https://instagram.com/HasnainAli_313" target='_blank'>
<TiSocialInstagramCircular size="35" />
</a>
<a className=' hover:animate-pulse' href="https://twitter.com/AliOkzOfficial" target='_blank'>
<AiFillTwitterCircle size="35" />
</a>
</div>
</div>
</div>
    </section>
  )
}

export default Contact