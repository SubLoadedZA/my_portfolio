import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";
import {HiOutlineChevronDoubleUp} from 'react-icons/hi'

function Contact() {
  return (
    <div id="contact" className="w-full lg:h-screen">
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <h2 className="tracking-widest uppercase p-10 text-teal-700">
          Contact
        </h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="https://images.unsplash.com/photo-1479920252409-6e3d8e8d4866?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                />
              </div>
              <div>
                <h2 className="pt-7 text-teal-700">Diala Abul-Khail</h2>
                <h3 className="text-gray-400">Full Stack Developer</h3>
                <p className="pt-3">
                  I am available for freelance or full-time positions.
                </p>
              </div>
              <div>
                <p className="uppercase pt-24 text-center">get in touch!</p>
                <div className="flex items-center justify-between py-4 ">
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

          {/* right */}
          <div className="col-span-3 w-full h-auto shadow-xl rounded-xl lg:p-4">
            <dev className="p-4">
              
            <form>
              <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Name</label>
                  <input className= "border-2 rounded-lg p-3 flex border-gray-200 caret-teal-200" type="text"/>
                </div>

                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Phone Number</label>
                  <input className="border-2 rounded-lg p-3 flex border-gray-200 caret-teal-200" type="text"/>
                </div>
              </div>

              <div className="flex flex-col py-2" >
              <label className="uppercase text-sm py-2">Email</label>
              <input className="border-2 rounded-lg p-3 flex border-gray-200 caret-teal-200" type="email"/>
              </div>

              <div className="flex flex-col py-2" >
              <label className="uppercase text-sm py-2">Subject</label>
              <input className="border-2 rounded-lg p-3 flex border-gray-200 caret-teal-200" type="text"/>
              </div>

              <div className="flex flex-col py-2" >
              <label className="uppercase text-sm py-2">message</label>
              <textarea className="border-2 rounded-lg p-3 border-gray-300 caret-teal-200" rows='10'></textarea>
              </div>

              
                <button className="w-full p-3 mt-4">
                  Send Message
                </button>
              
            </form>

            </dev>
          </div>
        </div>

        <div className="justify-center flex py-12">
          <Link href="/">
            <div className="rounded-full shadow-md shadow-teal-200 p-3 cursor-pointer hover:scale-110 ease-in duration-200">
              <HiOutlineChevronDoubleUp className="m-auto text-teal-700" size={30}/>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Contact;
