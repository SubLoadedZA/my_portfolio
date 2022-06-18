import Link from "next/link";
import Image from "next/image";

function About() {
  return (
    <div id="about" className="flex items-center w-full p-2 py-16 md:h-screen">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <h2 className="py-10 tracking-widest text-teal-700 uppercase">
            About
          </h2>
          <h4 className="p-2 animate-pulse">Education</h4>
          <p className="py-1">
            I have completed my Bachelor degree in Civil Engineering in 2021 at
            Al-Hussein bin Talal University, Ma'an Jordan.
            It was then when I decided to sign up for something I always wanted
            to learn.. Programming!
            One month is left to complete the (Code fellows) intensive Software Development
            course in Python at Abdul-Aziz Ghurair School Of Advanced
            Computing (ASAC) that started in Jan,2022.
          </p>
          <h4 className="pt-4 animate-pulse">Experience</h4>
            <p className="py-1">My study of software development has hugely improved my problem solving and analytical thinking 
              skills, as well as my enthusiasm and willigness towards accepting any challenge that can 
              enhance my knowledge in this field.
              <br/>
              I believe I have the ability to deliver createive, high-quality web applications using Python and JavaScript based tools.
              </p>
            {/* <p className="py-4 text-center text-teal-500 ">
              Paying attention to details is the key for my passion in frontend development.
            </p> */}
          <Link href="/#projects">
            <p className="py-10 underline cursor-pointer">
              Check out some of my projects..
            </p>
          </Link>
        </div>
        <div>
          <Image
            className="duration-200 ease-in rounded-full"
            src="https://media-exp2.licdn.com/dms/image/C4E03AQHwBtIo6MpJ2A/profile-displayphoto-shrink_800_800/0/1653135377789?e=1660176000&v=beta&t=ds4mfIns1sI_Uky6U4SEZCMj2iyxwDVbcgCZNN42k1U"
            alt="me"
            width={400}
            height={400}
          />
        </div>
      </div>
    </div>
  );
}

export default About;
