import Image from "next/image";
import Link from "next/link";

function Projects() {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <h2 className="uppercase tracking-widest text-teal-700 p-10">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="relative flex items-center justify-center h-auto w-full shadow-xl p-4 rounded-xl group hover:bg-gradient-to-r from-teal-600 to-teal-800">
            <Image
              className="group-hover:opacity-10"
              src="/../public/assets/projects/traffic.gif"
              width="550"
              height="300"
              alt="/"
            />
            <div className="text-white hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
              <h3 className="text-2xl tracking-wider text-center">
                AI Traffic System
              </h3>
              <p className="pb-4 pt-2 text-center">Python</p>
              <Link href="/AiTraffic">
                <p className="text-center py-3 rounded-lg bg-white text-lg font-bold cursor-pointer text-teal-700 ">
                  More
                </p>
              </Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center h-auto w-full shadow-xl p-4 group rounded-xl hover:bg-gradient-to-r from-teal-600 to-teal-800">
            <Image
              className="group-hover:opacity-10"
              src="/../public/assets/projects/movie.png"
              width="550"
              height="300"
              alt="/"
            />
            <div className="text-white hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
              <h3 className="text-2xl tracking-wider text-center">
                Movies Library
              </h3>
              <p className="pb-4 pt-2 text-center">JavaScript</p>
              <Link href="/">
                <p className="text-center py-3 rounded-lg bg-white text-lg font-bold cursor-pointer text-teal-700 ">
                  More
                </p>
              </Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center h-auto w-full shadow-xl p-4 group rounded-xl hover:bg-gradient-to-r from-teal-600 to-teal-800">
            <Image
              className="group-hover:opacity-10"
              src="/../public/assets/projects/products.png"
              width="550"
              height="300"
              alt="/"
            />
            <div className="text-white hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
              <h3 className="text-2xl tracking-wider text-center">
                Products Webpage
              </h3>
              <p className="pb-4 pt-2 text-center">Python-Django</p>
              <Link href="/">
                <p className="text-center py-3 rounded-lg bg-white text-lg font-bold cursor-pointer text-teal-700 ">
                  More
                </p>
              </Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center h-auto w-full shadow-xl p-4 group rounded-xl hover:bg-gradient-to-r from-teal-600 to-teal-800">
            <Image
              className="group-hover:opacity-10"
              src="/../public/assets/projects/canser.png"
              width="550"
              height="300"
              alt="/"
            />
            <div className="text-white hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
              <h3 className="text-2xl tracking-wider text-center">
                AI Cancer Prediction
              </h3>
              <p className="pb-4 pt-2 text-center">Python</p>
              <Link href="/">
                <p className="text-center py-3 rounded-lg bg-white text-lg font-bold cursor-pointer text-teal-700 ">
                  More
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
