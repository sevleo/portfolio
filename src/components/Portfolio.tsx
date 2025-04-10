import TableOfContents from "./TableOfContents";
import { useEffect, useState, useRef } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { createRef } from "react";
import Project from "./Project";
import Experience from "./Experience";
import {
  useIntroNodes,
  useAboutNodes,
  useTechNodes,
  useConnectNodes,
} from "./hooks/useNodes";
import { useMainProjects } from "./hooks/useProjects";
import { useExperiences } from "./hooks/useExperiences";
import resume from "../assets/SevaLeoCV.pdf";

import {
  useHandleMouseEnterSection,
  useHandleMouseLeaveSection,
} from "./hooks/useHandleMouseEvent";

interface PortfolioProps {
  loadingState: string;
}

export default function Portfolio({ loadingState }: PortfolioProps) {
  const projects = useMainProjects();
  const experiences = useExperiences();

  // Loading nodes
  const items1 = useIntroNodes();
  const items2 = useAboutNodes();
  const items3 = useTechNodes();
  const items4 = useConnectNodes();

  // Creating containers for nodeRefs
  const refs1 = useRef<Array<React.MutableRefObject<HTMLDivElement>>>([]);
  const refs2 = useRef<Array<React.MutableRefObject<HTMLDivElement>>>([]);
  const refs3 = useRef<Array<React.MutableRefObject<HTMLDivElement>>>([]);
  const refs4 = useRef<Array<React.MutableRefObject<HTMLLIElement>>>([]);

  // Creating nodeRefs
  useEffect(() => {
    refs1.current = items1.map((_, i) => refs1.current[i] ?? createRef());
    refs2.current = items2.map((_, i) => refs2.current[i] ?? createRef());
    refs3.current = items3.map((_, i) => refs3.current[i] ?? createRef());
    refs4.current = items4.map((_, i) => refs4.current[i] ?? createRef());
  }, [items1, items2, items3, items4]);

  // Section nodeRefs
  const nodeRefAboutSection = useRef<HTMLElement>(null);
  const nodeRefTechnologiesSection = useRef<HTMLElement>(null);
  const nodeRefProjectsSection = useRef<HTMLElement>(null);
  const nodeRefExperienceSection = useRef<HTMLElement>(null);

  const nodeRefProjectsUl = useRef<HTMLUListElement>(null);
  const nodeRefExperienceUl = useRef<HTMLUListElement>(null);

  // Nav nodeRef
  const nodeRef4 = useRef<HTMLDivElement>(null);

  // Email nodeRef
  const nodeRefEmail = useRef<HTMLAnchorElement>(null);

  // State for active Table of Content item
  const [activeId, setActiveId] = useState(undefined);

  // Updating fade effect for active TOC item
  useEffect(() => {
    const sectionRefs = [
      nodeRefAboutSection,
      nodeRefTechnologiesSection,
      nodeRefProjectsSection,
      nodeRefExperienceSection,
    ];

    sectionRefs.forEach((ref) => {
      if (ref.current) {
        if (activeId === ref.current.id + "-h2") {
          ref.current.classList.remove("fade");
        } else {
          ref.current.classList.add("fade");
        }
      }
    });
  }, [activeId]);

  const [introComplete, setIntroComplete] = useState(false);
  const [aboutComplete, setAboutComplete] = useState(false);
  const [techComplete, setTechComplete] = useState(false);
  const [connectComplete, setConnectComplete] = useState(false);
  const [showBorder, setShowBorder] = useState(false);

  // Setting introComplete
  const handleIntroEntered = () => {
    if (
      refs1.current.every((item) =>
        item.current?.classList.contains("intro-enter-done")
      )
    ) {
      setTimeout(() => {
        setIntroComplete(true);
      }, 0);
    }
  };

  // Setting aboutComplete
  const handleAboutEntered = () => {
    if (
      refs2.current.every((item) =>
        item.current?.classList.contains("about-enter-done")
      )
    ) {
      setTimeout(() => {
        setAboutComplete(true);
      }, 50);
    }
  };

  // Setting techComplete
  const handleTechEntered = () => {
    // Check if all Tech elements have completed entering
    if (
      refs3.current.every((item) =>
        item.current?.classList.contains("tech-enter-done")
      )
    ) {
      setTimeout(() => {
        setTechComplete(true);
      }, 50);
    }
  };

  // Setting connectComplete & showBorder
  const handleConnectEntered = () => {
    // Check if all about elements have completed entering
    if (
      refs4.current.every((item) =>
        item.current?.classList.contains("connect-enter-done")
      )
    ) {
      setTimeout(() => {
        setConnectComplete(true);
      }, 50);

      setTimeout(() => {
        setShowBorder(true);
      }, 1900);
    }
  };

  const handleProjectsListEnter = useHandleMouseEnterSection(
    nodeRefProjectsSection.current?.childNodes[1]?.childNodes || [],
    "unfocus"
  );

  const handleProjectsListLeave = useHandleMouseLeaveSection(
    nodeRefProjectsSection.current?.childNodes[1]?.childNodes || [],
    "unfocus"
  );

  const handleExperienceListEnter = useHandleMouseEnterSection(
    nodeRefExperienceSection.current?.childNodes[1]?.childNodes || [],
    "unfocus"
  );

  const handleExperienceListLeave = useHandleMouseLeaveSection(
    nodeRefExperienceSection.current?.childNodes[1]?.childNodes || [],
    "unfocus"
  );

  return (
    <>
      <div
        className={`min-[800px]:pr-2- left-0 top-0 z-[101] flex w-full flex-col justify-center overflow-x-hidden overflow-y-hidden pl-6 pr-6 pt-[100px] min-[800px]:pl-20 min-[800px]:pr-20 min-[1000px]:fixed min-[1000px]:h-full min-[1000px]:flex-row min-[1000px]:overflow-y-auto min-[1000px]:pl-28 min-[1000px]:pr-28`}
      >
        <header className="flex max-h-[800px] w-1/3 min-w-[350px] max-w-[500px] flex-shrink-0 flex-col min-[1000px]:sticky min-[1000px]:top-0">
          <TransitionGroup component={null}>
            {loadingState === "loading-complete" &&
              items1.map((item, i) => {
                return (
                  <CSSTransition
                    key={i}
                    nodeRef={refs1.current[i]}
                    classNames="intro"
                    timeout={300}
                    onEntered={handleIntroEntered}
                  >
                    <div
                      className="intro"
                      style={{ transitionDelay: `${i + 0}00ms` }}
                      ref={refs1.current[i]}
                    >
                      {item}
                    </div>
                  </CSSTransition>
                );
              })}
          </TransitionGroup>

          <div className="hidden min-[1000px]:block">
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
          <div className="mb-20 mt-auto flex flex-col items-start gap-2 pb-[10px] pt-10">
            <ul className="flex gap-5">
              {items4.map((item, i) => {
                return (
                  <CSSTransition
                    key={i}
                    in={aboutComplete}
                    nodeRef={refs4.current[i]}
                    classNames="connect"
                    timeout={100}
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
              timeout={200}
            >
              <a
                href="mailto:contact@sleo.dev"
                className="connect text-sm text-whiteDimmed hover:text-green"
                ref={nodeRefEmail}
                style={{ transitionDelay: `${1000}ms` }}
              >
                contact@sleo.dev
              </a>
            </CSSTransition>
          </div>
        </header>
        <div className="relative mb-20 h-fit flex-shrink min-[1000px]:w-2/3 min-[1000px]:max-w-[550px]">
          <section className="" id="about" ref={nodeRefAboutSection}>
            <SectionHeader
              id="about-h2"
              text="About"
              techComplete={aboutComplete}
            />
            <div
              className={`section-content relative ${showBorder ? "show-border" : ""} `}
            >
              {items2.map((item, i) => {
                return (
                  <CSSTransition
                    in={introComplete}
                    key={i}
                    nodeRef={refs2.current[i]}
                    classNames="about"
                    timeout={400}
                    onEntered={handleAboutEntered}
                  >
                    <div
                      className="about"
                      style={{ transitionDelay: `${i + 1}00ms` }}
                      ref={refs2.current[i]}
                    >
                      {item}
                    </div>
                  </CSSTransition>
                );
              })}
            </div>
          </section>
          <section
            id="technologies"
            ref={nodeRefTechnologiesSection}
            className="relative mt-[120px]"
          >
            <SectionHeader
              id="technologies-h2"
              text="Technologies"
              techComplete={techComplete}
            />
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
              className={`projects-section relative mt-[120px]`}
              style={{ transitionDelay: `${500}ms` }}
            >
              <SectionHeader
                id="projects-h2"
                text="Projects"
                techComplete={techComplete}
              />

              <ul
                ref={nodeRefProjectsUl}
                className={`section-content relative ${showBorder ? "show-border" : ""} flex flex-col gap-[10px]`}
                onMouseEnter={handleProjectsListEnter}
                onMouseLeave={handleProjectsListLeave}
              >
                {projects.map((project) => (
                  <Project
                    key={project.projectName}
                    link={project.link}
                    imgSrc={project.imgSrc}
                    projectName={project.projectName}
                    projectDescription={project.projectDescription}
                    projectTechnologies={project.technologies}
                    nodeRefProjectsSection={nodeRefProjectsSection}
                  />
                ))}
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
              className={`experience-section relative mt-[120px]`}
              style={{ transitionDelay: `${1000}ms` }}
            >
              <SectionHeader
                id="experience-h2"
                text="Experience"
                techComplete={techComplete}
              />

              <ul
                ref={nodeRefExperienceUl}
                className={`section-content relative ${showBorder ? "show-border" : ""} flex flex-col gap-[10px]`}
                onMouseEnter={handleExperienceListEnter}
                onMouseLeave={handleExperienceListLeave}
              >
                {experiences.map((experience) => (
                  <Experience
                    key={experience.dates}
                    dates={experience.dates}
                    roleCompany={experience.roleCompany}
                    jobDescription={experience.jobDescription}
                    nodeRefExperienceSection={nodeRefExperienceSection}
                  />
                ))}
              </ul>
              <a
                href={resume}
                download="Seva Leo Resume.pdf"
                className="group text-end text-base font-[600] text-white hover:cursor-pointer hover:text-green"
              >
                <p className="pt-6 text-end">
                  Download Full Résumé{" "}
                  <span className="">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover:translate-x-[3px] group-hover:translate-y-[-3px]"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </p>
              </a>
            </section>
          </CSSTransition>
        </div>
      </div>
    </>
  );
}

interface SectionHeaderProps {
  id: string;
  text: string;
  techComplete: boolean;
}

function SectionHeader({ id, text, techComplete }: SectionHeaderProps) {
  return (
    <h2
      id={id}
      className={` ${techComplete ? "section-label-transition-complete opacity-100" : "section-label opacity-0"} pb-10 text-start text-[20px] transition-all min-[1000px]:absolute min-[1000px]:top-[-100px] min-[1000px]:h-0 min-[1000px]:pb-0 min-[1000px]:text-[16px] min-[1000px]:opacity-0`}
    >
      {text}
    </h2>
  );
}
