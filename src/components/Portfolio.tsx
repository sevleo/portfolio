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
      }, 200);
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
      }, 200);
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
      }, 200);

      setTimeout(() => {
        setShowBorder(true);
      }, 1400);
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
        className={`fixed left-0 top-0 z-[101] flex h-full w-full justify-center overflow-y-auto overflow-x-hidden pl-28 pr-28 pt-[100px]`}
      >
        <header className="sticky top-0 flex max-h-[800px] w-1/2 max-w-[500px] flex-col">
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
          <div className="mb-20 mt-auto flex flex-col items-start gap-2 pb-[10px]">
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
                className="connect text-whiteDimmed hover:text-green text-sm"
                ref={nodeRefEmail}
                style={{ transitionDelay: `${1000}ms` }}
              >
                seva.leonov@hotmail.com
              </a>
            </CSSTransition>
          </div>
        </header>
        <div className="relative mb-20 h-fit w-1/2 max-w-[550px]">
          <section className="" id="about" ref={nodeRefAboutSection}>
            <h2 id="about-h2" className="absolute top-[-100px] h-0 opacity-0">
              About
            </h2>
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
            <div>
              <h2
                id="technologies-h2"
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
              className={`projects-section relative mt-[120px]`}
              style={{ transitionDelay: `${500}ms` }}
            >
              <div>
                <h2
                  id="projects-h2"
                  className="absolute top-[-100px] h-0 opacity-0"
                >
                  Projects
                </h2>
              </div>
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
              <div>
                <h2
                  id="experience-h2"
                  className="absolute top-[-100px] h-0 opacity-0"
                >
                  Experience
                </h2>
              </div>
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
            </section>
          </CSSTransition>
        </div>
      </div>
    </>
  );
}
