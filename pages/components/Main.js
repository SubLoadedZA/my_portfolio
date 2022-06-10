import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

function Main() {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full m-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase taxt-sm tracking-widest text-gray-400 py-5 ">
            Learn More About Me!
          </p>
          <h1>
            Hey, I'm <span className="text-gray-700 animate-pulse"> Diala</span>
            .
          </h1>
          <div className="">
            <h2 className="uppercase py-2 text-gray-500">
              Full stack software developer
            </h2>
            <p className="py-4 text-gray-600 max-w-[70%] m-auto">
              I am a full-stack Python developer with a Civil Engineering
              background.{" "}
            </p>
            <div className="flex items-center justify-between max-w-[330px] m-auto p-2">
              <div className="rounded-full shadow-md shadow-teal-200 p-4 cursor-pointer hover:scale-125 ease-in duration-200">
                <a href="https://www.linkedin.com/in/dialaabulkhail/">
                <FaLinkedinIn />
                </a>
              </div>
              <div className="rounded-full shadow-md shadow-teal-200 p-4 cursor-pointer hover:scale-125 ease-in duration-200">
                <a href="https://github.com/dialaabulkhail">
                <FaGithub />
                </a>
              </div>
              <div className="rounded-full shadow-md shadow-teal-200 p-4 cursor-pointer hover:scale-125 ease-in duration-200">
                <a href="mailto:diala.sh.98@gmail.com">
                <AiOutlineMail />
                </a>
              </div>
              <div className="rounded-full shadow-md shadow-teal-200 p-4 cursor-pointer hover:scale-125 ease-in duration-200">
                <a href="https://hashnode.com/@DialaBK">
                <BsFillPersonLinesFill />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
