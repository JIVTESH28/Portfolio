import logo from "../assets/jivteshLogo.png";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        {/* <img className="mx-3 w-10" src={logo} alt="logo" /> */}
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-3xl">
        <FaLinkedin className="cursor-pointer"/>
        <FaGithub className="cursor-pointer" />
        <BsTwitterX  className="cursor-pointer"  />
      </div>
    </nav>
  );
};


export default Navbar;
