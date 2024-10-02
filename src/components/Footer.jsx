import { FaRegCopyright } from "react-icons/fa";

function Footer() {
     const todayYear = new Date().getFullYear();
  return (
    <>
      <footer className="bg-[#111827] p-5">
        <p className="  text-sm   flex place-content-center items-center gap-2 text-white"><FaRegCopyright />{todayYear} | coded with ❤️️ By <a href="https://linkedin.com/in/HasnainAli313">Hasnain Ali</a></p>
    </footer>
    </>
  )
}

export default Footer