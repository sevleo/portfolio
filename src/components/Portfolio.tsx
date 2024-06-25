import TableOfContents from "./TableOfContents";

export default function Portfolio() {
  return (
    <>
      <div className="fixed left-0 top-0 z-[101] flex h-full w-full justify-center overflow-auto pl-28 pr-28 pt-[100px]">
        <header className="sticky top-0 flex w-1/2 max-w-[500px] flex-col">
          <div>
            <p className="text-start">Hi, my name is</p>
            <p className="font-noto-sans text-start text-[60px] font-[600] leading-none opacity-90">
              Seva Leo
            </p>
            <p className="mt-4 text-start text-[20px] font-[400] opacity-90">
              Full-Stack Developer
            </p>
            <p className="mt-4 w-[70%] text-start opacity-70">
              I build responsive and fast full stack websites
            </p>
          </div>

          <div className="mt-20">
            <TableOfContents />
          </div>
          <div className="mb-20 mt-auto">
            <ul className="flex gap-5">
              <li>
                <a
                  href="https://github.com/sevleo"
                  className="hover:opacity-100"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/seva-leo-733b09114/"
                  className="hover:opacity-100"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/seva_leo/"
                  className="hover:opacity-100"
                  target="_blank"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1000 1000"
                    fill="currentColor"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path d="M295.42,6c-53.2,2.51-89.53,11-121.29,23.48-32.87,12.81-60.73,30-88.45,57.82S40.89,143,28.17,175.92c-12.31,31.83-20.65,68.19-23,121.42S2.3,367.68,2.56,503.46,3.42,656.26,6,709.6c2.54,53.19,11,89.51,23.48,121.28,12.83,32.87,30,60.72,57.83,88.45S143,964.09,176,976.83c31.8,12.29,68.17,20.67,121.39,23s70.35,2.87,206.09,2.61,152.83-.86,206.16-3.39S799.1,988,830.88,975.58c32.87-12.86,60.74-30,88.45-57.84S964.1,862,976.81,829.06c12.32-31.8,20.69-68.17,23-121.35,2.33-53.37,2.88-70.41,2.62-206.17s-.87-152.78-3.4-206.1-11-89.53-23.47-121.32c-12.85-32.87-30-60.7-57.82-88.45S862,40.87,829.07,28.19c-31.82-12.31-68.17-20.7-121.39-23S637.33,2.3,501.54,2.56,348.75,3.4,295.42,6m5.84,903.88c-48.75-2.12-75.22-10.22-92.86-17-23.36-9-40-19.88-57.58-37.29s-28.38-34.11-37.5-57.42c-6.85-17.64-15.1-44.08-17.38-92.83-2.48-52.69-3-68.51-3.29-202s.22-149.29,2.53-202c2.08-48.71,10.23-75.21,17-92.84,9-23.39,19.84-40,37.29-57.57s34.1-28.39,57.43-37.51c17.62-6.88,44.06-15.06,92.79-17.38,52.73-2.5,68.53-3,202-3.29s149.31.21,202.06,2.53c48.71,2.12,75.22,10.19,92.83,17,23.37,9,40,19.81,57.57,37.29s28.4,34.07,37.52,57.45c6.89,17.57,15.07,44,17.37,92.76,2.51,52.73,3.08,68.54,3.32,202s-.23,149.31-2.54,202c-2.13,48.75-10.21,75.23-17,92.89-9,23.35-19.85,40-37.31,57.56s-34.09,28.38-57.43,37.5c-17.6,6.87-44.07,15.07-92.76,17.39-52.73,2.48-68.53,3-202.05,3.29s-149.27-.25-202-2.53m407.6-674.61a60,60,0,1,0,59.88-60.1,60,60,0,0,0-59.88,60.1M245.77,503c.28,141.8,115.44,256.49,257.21,256.22S759.52,643.8,759.25,502,643.79,245.48,502,245.76,245.5,361.22,245.77,503m90.06-.18a166.67,166.67,0,1,1,167,166.34,166.65,166.65,0,0,1-167-166.34"></path>
                  </svg>
                </a>
              </li>
              <li>
                <a href="https://leetcode.com/u/sevaleo/" target="_blank">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="h-6 w-6"
                    aria-hidden="true"
                  >
                    <path
                      fill="currentColor"
                      d="M13.483 0a1.37 1.37 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.3 5.3 0 0 0-1.209 2.104a5 5 0 0 0-.125.513a5.5 5.5 0 0 0 .062 2.362a6 6 0 0 0 .349 1.017a5.9 5.9 0 0 0 1.271 1.818l4.277 4.193l.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.38 1.38 0 0 0-1.951-.003l-2.396 2.392a3.02 3.02 0 0 1-4.205.038l-.02-.019l-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.7 2.7 0 0 1 .066-.523a2.55 2.55 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0m-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382a1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382a1.38 1.38 0 0 0-1.38-1.382z"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </header>
        <div className="relative w-1/2 max-w-[500px]">
          <section>
            <div>
              <h2 id="about" className="absolute top-[-100px] h-0 opacity-0">
                About
              </h2>
            </div>
            <div>
              <p className="pb-2 text-start opacity-70">
                I started my programming career in 2014 when, out of curiosity,
                I decided to explore a Java tutorial. A year later, I found
                employment at a consulting firm, working on Salesforce projects
                as a Salesforce Developer.
              </p>
              <p className="pb-2 text-start opacity-70">
                Each time I stayed on a project for a while, I mastered its
                intricacies. I developed an intuitive sense for potential issues
                and naturally took control of the system's overall dynamics.
                This progression led me to become a Solution Architect. For the
                next four years, I thrived in this new role.
              </p>
              <p className="pb-2 text-start opacity-70">
                As time went on, I found myself spending more time in the
                business realm and less in the technical realm. This shift
                rekindled my passion for programming. At the beginning of 2023,
                I decided to take a career break to update my knowledge of
                modern technologies and frameworks, aiming to return to my roots
                as a programmer.
              </p>
              <p className="pb-2 text-start opacity-70">
                Now, I enjoy creating full-stack applications, finding
                satisfaction in producing high-quality, reliable, and
                aesthetically pleasing code.
              </p>
            </div>
          </section>
          <section className="relative mt-[100px]">
            <div>
              <h2
                id="technologies"
                className="absolute top-[-100px] h-0 opacity-0"
              >
                Technologies
              </h2>
            </div>
            <div className="flex flex-wrap justify-center gap-1">
              <img
                src="https://img.shields.io/badge/Javascript-20232A?style=for-the-badge&logo=javascript&logoColor=#F7DF1E"
                alt=""
              />
              <img
                src="https://img.shields.io/badge/Typescript-20232A?style=for-the-badge&logo=typescript&logoColor=#3178C6"
                alt=""
              />
              <img
                src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
                alt=""
              />
              <img
                src="https://img.shields.io/badge/Node.js-20232A?style=for-the-badge&logo=nodedotjs&logoColor=#5FA04E"
                alt=""
              />
              <img
                src="https://img.shields.io/badge/tailwindcss-20232A?style=for-the-badge&logo=tailwindcss&logoColor=#06B6D4"
                alt=""
              />
              <img
                src="https://img.shields.io/badge/mongodb-20232A?style=for-the-badge&logo=mongodb"
                alt=""
              />
              <img
                src="https://img.shields.io/badge/HTML5-20232A?style=for-the-badge&logo=HTML5"
                alt=""
              />
              <img
                src="https://img.shields.io/badge/CSS3-20232A?style=for-the-badge&logo=CSS3"
                alt=""
              />
              <img
                src="https://img.shields.io/badge/git-20232A?style=for-the-badge&logo=git"
                alt=""
              />
              <img
                src="https://img.shields.io/badge/npm-20232A?style=for-the-badge&logo=npm"
                alt=""
              />

              <img
                src="https://img.shields.io/badge/Adaptable.io-20232A?style=for-the-badge&logo=Adaptable.io"
                alt=""
              />
              <img
                src="https://img.shields.io/badge/Netlify-20232A?style=for-the-badge&logo=Netlify"
                alt=""
              />

              <img
                src="https://img.shields.io/badge/DND%20Kit-20232A?style=for-the-badge&logo=DNDKit"
                alt=""
              />
              <img
                src="https://img.shields.io/badge/MongooseJs-20232A?style=for-the-badge&logo=MongooseJs"
                alt=""
              />
              <img
                src="https://img.shields.io/badge/PassportJS-20232A?style=for-the-badge&logo=Passport"
                alt=""
              />
              <img
                src="https://img.shields.io/badge/datefns-20232A?style=for-the-badge&logo=datefns"
                alt=""
              />
            </div>
          </section>

          <section className="relative mt-[100px]">
            <div>
              <h2 id="projects" className="absolute top-[-100px] h-0 opacity-0">
                Projects
              </h2>
            </div>
            <div>
              <p>
                testtest test test test test esttest test test test test esttest
                test test test test esttest test test test test esttest test
                test test test esttest test test test test esttest test test
                test test esttest test test test test esttest test test test
                test esttest test test test test esttest test test test test
                esttest test test test test esttest test test test test esttest
                test test test test esttest test test test test esttest test
                test test test testtest test test test test esttest test test
                test test esttest test test test test esttest test test test
                test esttest test test test test esttest test test test test
                esttest test test test test esttest test test test test esttest
                test test test test esttest test test test test esttest test
                test test test esttest test test test test esttest test test
                test test esttest test test test test esttest test test test
                test esttest test test test test testtest test test test test
                esttest test test test test esttest test test test test esttest
                test test test test esttest test test test test esttest test
                test test test esttest test test test test esttest test test
                test test esttest test test test test esttest test test test
                test esttest test test test test esttest test test test test
                esttest test test test test esttest test test test test esttest
                test test test test esttest test test test test testtest test
                test test test esttest test test test test esttest test test
                test test esttest test test test test esttest test test test
                test esttest test test test test esttest test test test test
              </p>
              <p>
                testtest test test test test esttest test test test test esttest
                test test test test esttest test test test test esttest test
                test test test esttest test test test test esttest test test
                test test esttest test test test test esttest test test test
                test esttest test test test test esttest test test test test
                esttest test test test test esttest test test test test esttest
                test test test test esttest test test test test esttest test
                test test test testtest test test test test esttest test test
                test test esttest test test test test esttest test test test
                test esttest test test test test esttest test test test test
                esttest test test test test esttest test test test test esttest
                test test test test esttest test test test test esttest test
                test test test esttest test test test test esttest test test
                test test esttest test test test test esttest test test test
                test esttest test test test test testtest test test test test
                esttest test test test test esttest test test test test esttest
                test test test test esttest test test test test esttest test
                test test test esttest test test test test esttest test test
                test test esttest test test test test esttest test test test
                test esttest test test test test esttest test test test test
                esttest test test test test esttest test test test test esttest
                test test test test esttest test test test test testtest test
                test test test esttest test test test test esttest test test
                test test esttest test test test test esttest test test test
                test esttest test test test test esttest test test test test
              </p>
              <p>
                testtest test test test test esttest test test test test esttest
                test test test test esttest test test test test esttest test
                test test test esttest test test test test esttest test test
                test test esttest test test test test esttest test test test
                test esttest test test test test esttest test test test test
                esttest test test test test esttest test test test test esttest
                test test test test esttest test test test test esttest test
                test test test testtest test test test test esttest test test
                test test esttest test test test test esttest test test test
                test esttest test test test test esttest test test test test
                esttest test test test test esttest test test test test esttest
                test test test test esttest test test test test esttest test
                test test test esttest test test test test esttest test test
                test test esttest test test test test esttest test test test
                test esttest test test test test testtest test test test test
                esttest test test test test esttest test test test test esttest
                test test test test esttest test test test test esttest test
                test test test esttest test test test test esttest test test
                test test esttest test test test test esttest test test test
                test esttest test test test test esttest test test test test
                esttest test test test test esttest test test test test esttest
                test test test test esttest test test test test testtest test
                test test test esttest test test test test esttest test test
                test test esttest test test test test esttest test test test
                test esttest test test test test esttest test test test test
              </p>
            </div>
          </section>
          <section className="relative mt-[100px]">
            <div>
              <h2
                id="experience"
                className="absolute top-[-100px] h-0 opacity-0"
              >
                Experience
              </h2>
            </div>
            <div>
              <p>
                testtest test test test test esttest test test test test esttest
                test test test test esttest test test test test esttest test
                test test test esttest test test test test esttest test test
                test test esttest test test test test esttest test test test
                test esttest test test test test esttest test test test test
                esttest test test test test esttest test test test test esttest
                test test test test esttest test test test test esttest test
                test test test testtest test test test test esttest test test
                test test esttest test test test test esttest test test test
                test esttest test test test test esttest test test test test
                esttest test test test test esttest test test test test esttest
                test test test test esttest test test test test esttest test
                test test test esttest test test test test esttest test test
                test test esttest test test test test esttest test test test
                test esttest test test test test testtest test test test test
                esttest test test test test esttest test test test test esttest
                test test test test esttest test test test test esttest test
                test test test esttest test test test test esttest test test
                test test esttest test test test test esttest test test test
                test esttest test test test test esttest test test test test
                esttest test test test test esttest test test test test esttest
                test test test test esttest test test test test testtest test
                test test test esttest test test test test esttest test test
                test test esttest test test test test esttest test test test
                test esttest test test test test esttest test test test test
              </p>
              <p>
                testtest test test test test esttest test test test test esttest
                test test test test esttest test test test test esttest test
                test test test esttest test test test test esttest test test
                test test esttest test test test test esttest test test test
                test esttest test test test test esttest test test test test
                esttest test test test test esttest test test test test esttest
                test test test test esttest test test test test esttest test
                test test test testtest test test test test esttest test test
                test test esttest test test test test esttest test test test
                test esttest test test test test esttest test test test test
                esttest test test test test esttest test test test test esttest
                test test test test esttest test test test test esttest test
                test test test esttest test test test test esttest test test
                test test esttest test test test test esttest test test test
                test esttest test test test test testtest test test test test
                esttest test test test test esttest test test test test esttest
                test test test test esttest test test test test esttest test
                test test test esttest test test test test esttest test test
                test test esttest test test test test esttest test test test
                test esttest test test test test esttest test test test test
                esttest test test test test esttest test test test test esttest
                test test test test esttest test test test test testtest test
                test test test esttest test test test test esttest test test
                test test esttest test test test test esttest test test test
                test esttest test test test test esttest test test test test
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
