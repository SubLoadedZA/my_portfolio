import Image from "next/image";

function Skills() {
  return (
    <div id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <h2 className="uppercase tracking-widest text-teal-700 py-10">
          Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          <div className="p-5 shadow-xl rounded-full hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968350.png"
                  width="64px"
                  height="64px"
                  alt="github"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Python</h3>
              </div>
            </div>
          </div>

          <div className="p-5 shadow-xl rounded-full hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  src="https://github.com/fireclint/portfolio-nextjs/blob/main/public/assets/skills/css.png?raw=true"
                  width="64px"
                  height="64px"
                  alt="github"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
            </div>
          </div>

          <div className="p-5 shadow-xl rounded-full hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  src="https://github.com/fireclint/portfolio-nextjs/blob/main/public/assets/skills/html.png?raw=true"
                  width="64px"
                  height="64px"
                  alt="github"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
            </div>
          </div>

          <div className="p-5 shadow-xl rounded-full hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  src="https://github.com/fireclint/portfolio-nextjs/blob/main/public/assets/skills/javascript.png?raw=true"
                  width="64px"
                  height="64px"
                  alt="github"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>

          <div className="p-5 shadow-xl rounded-full hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  src="https://github.com/fireclint/portfolio-nextjs/blob/main/public/assets/skills/github1.png?raw=true"
                  width="64px"
                  height="64px"
                  alt="github"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>GitHub</h3>
              </div>
            </div>
          </div>

          <div className="p-5 shadow-xl rounded-full hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  src="https://github.com/fireclint/portfolio-nextjs/blob/main/public/assets/skills/node.png?raw=true"
                  width="64px"
                  height="64px"
                  alt="github"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Node.JS</h3>
              </div>
            </div>
          </div>

          <div className="p-5 shadow-xl rounded-full hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  src="https://github.com/fireclint/portfolio-nextjs/blob/main/public/assets/skills/react.png?raw=true"
                  width="64px"
                  height="64px"
                  alt="github"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>

          <div className="p-5 shadow-xl rounded-full hover:scale-105 ease-in duration-200">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <img
                  src="https://github.com/fireclint/portfolio-nextjs/blob/main/public/assets/skills/tailwind.png?raw=true"
                  width="64px"
                  height="64px"
                  alt="github"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
