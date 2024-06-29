import TableOfContents from "./TableOfContents";
import { useEffect, useState, useRef, useMemo } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { createRef } from "react";
import yogato from "../assets/yogato.png";
import Project from "./Project";

export default function Portfolio({ loadingState }) {
  const [activeId, setActiveId] = useState(undefined);

  useEffect(() => {
    if (activeId === nodeRefAboutSection.current.id) {
      nodeRefAboutSection.current.classList.remove("fade");
      nodeRefTechnologiesSection.current.classList.add("fade");
      nodeRefProjectsSection.current.classList.add("fade");
      nodeRefExperienceSection.current.classList.add("fade");
    }
    if (activeId === nodeRefTechnologiesSection.current.id) {
      nodeRefAboutSection.current.classList.add("fade");
      nodeRefTechnologiesSection.current.classList.remove("fade");
      nodeRefProjectsSection.current.classList.add("fade");
      nodeRefExperienceSection.current.classList.add("fade");
    }
    if (activeId === nodeRefProjectsSection.current.id) {
      nodeRefAboutSection.current.classList.add("fade");
      nodeRefTechnologiesSection.current.classList.add("fade");
      nodeRefProjectsSection.current.classList.remove("fade");
      nodeRefExperienceSection.current.classList.add("fade");
    }
    if (activeId === nodeRefExperienceSection.current.id) {
      nodeRefAboutSection.current.classList.add("fade");
      nodeRefTechnologiesSection.current.classList.add("fade");
      nodeRefProjectsSection.current.classList.add("fade");
      nodeRefExperienceSection.current.classList.remove("fade");
    }
  }, [activeId]);

  // Section nodeRefs
  const nodeRefAboutSection = useRef(null);
  const nodeRefTechnologiesSection = useRef(null);
  const nodeRefProjectsSection = useRef(null);
  const nodeRefExperienceSection = useRef(null);

  // Intro nodeRefs (items1)
  const nodeRef1 = useRef(null);
  const nodeRef2 = useRef(null);
  const nodeRef3 = useRef(null);

  // Nav nodeRef
  const nodeRef4 = useRef(null);

  // About nodeRefs (items2)
  const nodeRef5 = useRef(null);
  const nodeRef6 = useRef(null);
  const nodeRef7 = useRef(null);
  const nodeRef8 = useRef(null);

  // Email nodeRef
  const nodeRefEmail = useRef(null);

  // Intro nodes
  const one = (
    <p className={`pb-2 text-start text-green-500`}>Hi, my name is</p>
  );

  const two = (
    <p
      className={`text-start font-noto-sans text-[60px] font-[600] leading-none`}
    >
      Seva <span className={``}>Leo</span>.
    </p>
  );

  const three = (
    <p className="mt-4 w-[70%] text-start">
      I'm a full-stack software developer specializing on building{" "}
      <span className="text-green-500">fast </span>
      and <span className="text-green-500">responsive </span> websites with
      React and NodesJS.
    </p>
  );

  // Intro list
  const items1 = [
    [one, nodeRef1],
    [two, nodeRef2],
    [three, nodeRef3],
  ];

  // About nodes
  const four = (
    <p className="pb-2 text-start opacity-80">
      Back in 2014, out of curiosity, I opened a Java tutorial. A year later, I
      found employment at a consulting firm, working on Salesforce projects as a
      Salesforce Developer.
    </p>
  );

  const five = (
    <p className="pb-2 text-start opacity-80">
      Each time I stayed on a project for a while, I mastered its intricacies. I
      developed an intuitive sense for what's going on in the system and
      naturally took control of the system's overall dynamics. This progression
      led me to become a Solution Architect. For the next four years, I thrived
      in this new role.
    </p>
  );

  const six = (
    <p className="pb-2 text-start opacity-80">
      As time went on, I found myself spending more time in the business realm
      and less in the technical realm. This shift rekindled my passion for
      programming. At the beginning of 2023, I decided to take a career break to
      update my knowledge of modern technologies and frameworks, aiming to
      return to my roots as a programmer.
    </p>
  );

  const seven = (
    <p className="pb-2 text-start opacity-80">
      Now, I enjoy creating full-stack applications, finding satisfaction in
      producing high-quality, reliable, and aesthetically pleasing code.
    </p>
  );

  // About list
  const items2 = [
    [four, nodeRef5],
    [five, nodeRef6],
    [six, nodeRef7],
    [seven, nodeRef8],
  ];

  // Tech nodes
  const tech1 = useMemo(
    () => (
      <img
        src="https://img.shields.io/badge/Javascript-20232A?style=for-the-badge&logo=javascript&logoColor=#F7DF1E"
        alt=""
      />
    ),
    []
  );
  const tech2 = useMemo(
    () => (
      <img
        src="https://img.shields.io/badge/Typescript-20232A?style=for-the-badge&logo=typescript&logoColor=#3178C6"
        alt=""
      />
    ),
    []
  );
  const tech3 = useMemo(
    () => (
      <img
        src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"
        alt=""
      />
    ),
    []
  );
  const tech4 = useMemo(
    () => (
      <img
        src="https://img.shields.io/badge/Node.js-20232A?style=for-the-badge&logo=nodedotjs&logoColor=#5FA04E"
        alt=""
      />
    ),
    []
  );
  const tech5 = useMemo(
    () => (
      <img
        src="https://img.shields.io/badge/tailwindcss-20232A?style=for-the-badge&logo=tailwindcss&logoColor=#06B6D4"
        alt=""
      />
    ),
    []
  );
  const tech6 = useMemo(
    () => (
      <img
        src="https://img.shields.io/badge/mongodb-20232A?style=for-the-badge&logo=mongodb"
        alt=""
      />
    ),
    []
  );
  const tech7 = useMemo(
    () => (
      <img
        src="https://img.shields.io/badge/HTML5-20232A?style=for-the-badge&logo=HTML5"
        alt=""
      />
    ),
    []
  );
  const tech8 = useMemo(
    () => (
      <img
        src="https://img.shields.io/badge/CSS3-20232A?style=for-the-badge&logo=CSS3"
        alt=""
      />
    ),
    []
  );
  const tech9 = useMemo(
    () => (
      <img
        src="https://img.shields.io/badge/git-20232A?style=for-the-badge&logo=git"
        alt=""
      />
    ),
    []
  );
  const tech10 = useMemo(
    () => (
      <img
        src="https://img.shields.io/badge/npm-20232A?style=for-the-badge&logo=npm"
        alt=""
      />
    ),
    []
  );
  const tech11 = useMemo(
    () => (
      <img
        src="https://img.shields.io/badge/Adaptable.io-20232A?style=for-the-badge&logo=Adaptable.io"
        alt=""
      />
    ),
    []
  );
  const tech12 = useMemo(
    () => (
      <img
        src="https://img.shields.io/badge/Netlify-20232A?style=for-the-badge&logo=Netlify"
        alt=""
      />
    ),
    []
  );
  const tech13 = useMemo(
    () => (
      <img
        src="https://img.shields.io/badge/DND%20Kit-20232A?style=for-the-badge&logo=DNDKit"
        alt=""
      />
    ),
    []
  );
  const tech14 = useMemo(
    () => (
      <img
        src="https://img.shields.io/badge/MongooseJs-20232A?style=for-the-badge&logo=MongooseJs"
        alt=""
      />
    ),
    []
  );
  const tech15 = useMemo(
    () => (
      <img
        src="https://img.shields.io/badge/PassportJS-20232A?style=for-the-badge&logo=Passport"
        alt=""
      />
    ),
    []
  );
  const tech16 = useMemo(
    () => (
      <img
        src="https://img.shields.io/badge/datefns-20232A?style=for-the-badge&logo=datefns"
        alt=""
      />
    ),
    []
  );

  // Tech nodeRef
  const refs3 = useRef([]);

  // Tech list
  const items3 = useMemo(
    () => [
      tech1,
      tech2,
      tech3,
      tech4,
      tech5,
      tech6,
      tech7,
      tech8,
      tech9,
      tech10,
      tech11,
      tech12,
      tech13,
      tech14,
      tech15,
      tech16,
    ],
    [
      tech1,
      tech2,
      tech3,
      tech4,
      tech5,
      tech6,
      tech7,
      tech8,
      tech9,
      tech10,
      tech11,
      tech12,
      tech13,
      tech14,
      tech15,
      tech16,
    ]
  );

  // Create nodeRefs
  useEffect(() => {
    refs3.current = items3.map((_, i) => refs3.current[i] ?? createRef());
  }, [items3]);

  // Connect nodes
  const conn1 = useMemo(
    () => (
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
    ),
    []
  );

  const conn2 = useMemo(
    () => (
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
    ),
    []
  );

  const conn3 = useMemo(
    () => (
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
    ),
    []
  );

  const conn4 = useMemo(
    () => (
      <a
        href="https://leetcode.com/u/sevaleo/"
        target="_blank"
        className="hover:opacity-100"
      >
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
    ),
    []
  );

  // Connect nodeRef
  const refs4 = useRef([]);

  // Connect list
  const items4 = useMemo(
    () => [conn1, conn2, conn3, conn4],
    [conn1, conn2, conn3, conn4]
  );

  // Create nodeRefs
  useEffect(() => {
    refs4.current = items4.map((_, i) => refs4.current[i] ?? createRef());
  }, [items4]);

  const [introComplete, setIntroComplete] = useState(false);

  const handleIntroEntered = () => {
    // Check if all intro elements have completed entering
    if (
      items1.every((item) =>
        item[1].current?.classList.contains("intro-enter-done")
      )
    ) {
      setTimeout(() => {
        setIntroComplete(true);
      }, 0);
    }
  };

  const [aboutComplete, setAboutComplete] = useState(false);

  const handleAboutEntered = () => {
    // Check if all about elements have completed entering
    if (
      items2.every((item) =>
        item[1].current?.classList.contains("about-enter-done")
      )
    ) {
      setTimeout(() => {
        setAboutComplete(true);
      }, 200);
    }
  };

  const [techComplete, setTechComplete] = useState(false);

  const handleTechEntered = () => {
    // Check if all about elements have completed entering
    if (
      refs3.current.every((item) =>
        item.current?.classList.contains("tech-enter-done")
      )
    ) {
      setTimeout(() => {
        setTechComplete(true);
      }, 200);
    }
  };

  const [connectComplete, setConnectComplete] = useState(false);
  const [showBorder, setShowBorder] = useState(false);

  const handleConnectEntered = () => {
    // Check if all about elements have completed entering
    if (
      refs4.current.every((item) =>
        item.current?.classList.contains("connect-enter-done")
      )
    ) {
      setTimeout(() => {
        setConnectComplete(true);
      }, 200);

      setTimeout(() => {
        setShowBorder(true);
      }, 1400);
    }
  };

  return (
    <>
      <div
        className={`fixed left-0 top-0 z-[101] flex h-full w-full justify-center overflow-y-auto overflow-x-hidden pl-28 pr-28 pt-[100px]`}
      >
        <header className="sticky top-0 flex max-h-[800px] w-1/2 max-w-[500px] flex-col">
          <TransitionGroup component={null}>
            {loadingState === "loading-complete" &&
              items1.map((item, i) => {
                const node = item[0];
                return (
                  <CSSTransition
                    key={i}
                    nodeRef={item[1]}
                    classNames="intro"
                    timeout={300}
                    onEntered={handleIntroEntered}
                  >
                    <div
                      className="intro"
                      style={{ transitionDelay: `${i + 0}00ms` }}
                      ref={item[1]}
                    >
                      {node}
                    </div>
                  </CSSTransition>
                );
              })}
          </TransitionGroup>

          <div>
            <CSSTransition
              in={aboutComplete}
              timeout={500}
              classNames="nav-items"
              nodeRef={nodeRef4}
            >
              <div
                ref={nodeRef4}
                className="nav-items mt-20"
                // style={{ transitionDelay: `${300}ms` }}
              >
                <TableOfContents
                  activeId={activeId}
                  setActiveId={setActiveId}
                />
              </div>
            </CSSTransition>
          </div>
          <div className="mb-20 mt-auto flex flex-col items-start gap-2">
            <ul className="flex gap-5">
              {items4.map((item, i) => {
                return (
                  <CSSTransition
                    key={i}
                    in={techComplete}
                    nodeRef={refs4.current[i]}
                    classNames="connect"
                    timeout={500}
                    onEntered={handleConnectEntered}
                  >
                    <li
                      ref={refs4.current[i]}
                      className="connect"
                      style={{ transitionDelay: `${i * 200}ms` }}
                    >
                      {item}
                    </li>
                  </CSSTransition>
                );
              })}
            </ul>
            <CSSTransition
              in={techComplete}
              nodeRef={nodeRefEmail}
              classNames="connect"
              timeout={500}
            >
              <a
                href="mailto:seva.leonov@hotmail.com"
                className="connect text-sm text-[#b3b3b3] hover:text-[#ffffff] hover:opacity-100"
                ref={nodeRefEmail}
                style={{ transitionDelay: `${1000}ms` }}
              >
                seva.leonov@hotmail.com
              </a>
            </CSSTransition>
          </div>
        </header>
        <div className="relative w-1/2 max-w-[500px]">
          <section className="" id="about" ref={nodeRefAboutSection}>
            <div className="">
              <h2 id="about" className="absolute top-[-100px] h-0 opacity-0">
                About
              </h2>
            </div>
            <div
              className={`section-content relative ${showBorder ? "show-border" : ""}`}
            >
              {items2.map((item, i) => {
                const node = item[0];
                return (
                  <CSSTransition
                    in={introComplete}
                    key={i}
                    nodeRef={item[1]}
                    classNames="about"
                    timeout={500}
                    onEntered={handleAboutEntered}
                  >
                    <div
                      className="about"
                      style={{ transitionDelay: `${i + 1}00ms` }}
                      ref={item[1]}
                    >
                      {node}
                    </div>
                  </CSSTransition>
                );
              })}
            </div>
          </section>
          <section
            id="technologies"
            ref={nodeRefTechnologiesSection}
            className="relative mt-[100px] hover:opacity-100"
          >
            <div>
              <h2
                id="technologies"
                className="absolute top-[-100px] h-0 opacity-0"
              >
                Technologies
              </h2>
            </div>
            <div
              className={`section-content relative flex flex-wrap justify-start gap-1 ${showBorder ? "show-border" : ""}`}
            >
              {items3.map((item, i) => {
                return (
                  <CSSTransition
                    key={i}
                    in={aboutComplete}
                    nodeRef={refs3.current[i]}
                    classNames="tech"
                    timeout={500}
                    onEntered={handleTechEntered}
                  >
                    <div
                      ref={refs3.current[i]}
                      className="tech"
                      style={{ transitionDelay: `${i * 50}ms` }}
                    >
                      {item}
                    </div>
                  </CSSTransition>
                );
              })}
            </div>
          </section>
          <CSSTransition
            in={connectComplete}
            timeout={1000}
            classNames="projects-section"
            nodeRef={nodeRefProjectsSection}
          >
            <section
              id="projects"
              ref={nodeRefProjectsSection}
              className={`projects-section relative mt-[100px]`}
              style={{ transitionDelay: `${500}ms` }}
            >
              <div>
                <h2
                  id="projects"
                  className="absolute top-[-100px] h-0 opacity-0"
                >
                  Projects
                </h2>
              </div>
              <ul
                className={`section-content relative ${showBorder ? "show-border" : ""} hover:cursor-pointer`}
              >
                <Project
                  link="https://yogato.netlify.app"
                  imgSrc={yogato}
                  projectName="Yogato"
                  projectDescription="A full-stack application dedicated to Yoga. The application
              assists yoga instructors and experienced practitioners in creating
              and following through their sequences. It features voice
              announcements, custom-made sequence timer, a smooth and fast user
              experience, and support for both desktop and mobile."
                ></Project>
              </ul>
            </section>
          </CSSTransition>
          <CSSTransition
            in={connectComplete}
            timeout={1000}
            classNames="experience-section"
            nodeRef={nodeRefExperienceSection}
          >
            <section
              id="experience"
              ref={nodeRefExperienceSection}
              className={`experience-section relative mt-[100px]`}
              style={{ transitionDelay: `${1000}ms` }}
            >
              <div>
                <h2
                  id="experience"
                  className="absolute top-[-100px] h-0 opacity-0"
                >
                  Experience
                </h2>
              </div>
              <div
                className={`section-content relative ${showBorder ? "show-border" : ""}`}
              >
                <p>
                  testtest test test test test esttest test test test test
                  esttest test test test test esttest test test test test
                  esttest test test test test esttest test test test test
                  esttest test test test test esttest test test test test
                  esttest test test test test esttest test test test test
                  esttest test test test test esttest test test test test
                  esttest test test test test esttest test test test test
                  esttest test test test test esttest test test test test
                  testtest test test test test esttest test test test test
                  esttest test test test test esttest test test test test
                  esttest test test test test esttest test test test test
                  esttest test test test test esttest test test test test
                  esttest test test test test esttest test test test test
                  esttest test test test test esttest test test test test
                  esttest test test test test esttest test test test test
                  esttest test test test test esttest test test test test
                  testtest test test test test esttest test test test test
                  esttest test test test test esttest test test test test
                  esttest test test test test esttest test test test test
                  esttest test test test test esttest test test test test
                  esttest test test test test esttest test test test test
                  esttest test test test test esttest test test test test
                  esttest test test test test esttest test test test test
                  esttest test test test test esttest test test test test
                  testtest test test test test esttest test test test test
                  esttest test test test test esttest test test test test
                  esttest test test test test esttest test test test test
                  esttest test test test test
                </p>
                <p>
                  testtest test test test test esttest test test test test
                  esttest test test test test esttest test test test test
                  esttest test test test test esttest test test test test
                  esttest test test test test esttest test test test test
                  esttest test test test test esttest test test test test
                  esttest test test test test esttest test test test test
                  esttest test test test test esttest test test test test
                  esttest test test test test esttest test test test test
                  testtest test test test test esttest test test test test
                  esttest test test test test esttest test test test test
                  esttest test test test test esttest test test test test
                  esttest test test test test esttest test test test test
                  esttest test test test test esttest test test test test
                  esttest test test test test esttest test test test test
                  esttest test test test test esttest test test test test
                  esttest test test test test esttest test test test test
                  testtest test test test test esttest test test test test
                  esttest test test test test esttest test test test test
                  esttest test test test test esttest test test test test
                  esttest test test test test esttest test test test test
                  esttest test test test test esttest test test test test
                  esttest test test test test esttest test test test test
                  esttest test test test test esttest test test test test
                  esttest test test test test esttest test test test test
                  testtest test test test test esttest test test test test
                  esttest test test test test esttest test test test test
                  esttest test test test test esttest test test test test
                  esttest test test test test
                </p>
              </div>
            </section>
          </CSSTransition>
        </div>
      </div>
    </>
  );
}
