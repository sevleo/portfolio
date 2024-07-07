import { useRef, RefObject } from "react";
import {
  useHandleMouseEnterItem,
  useHandleMouseLeaveItem,
} from "./hooks/useHandleMouseEvent";

interface ProjectProps {
  link: string;
  imgSrc: string;
  projectName: string;
  projectDescription: string;
  projectTechnologies: string[];
  nodeRefProjectsSection: RefObject<HTMLElement>;
}

export default function Project({
  link,
  imgSrc,
  projectName,
  projectDescription,
  projectTechnologies,
  nodeRefProjectsSection,
}: ProjectProps) {
  const handleProjectClick = (force: string) => {
    if (window.innerWidth > 600 && force) {
      return;
    }
    if (window.innerWidth > 600 || force) {
      window.open(link, "_blank");
    }
  };

  const projectRef = useRef(null);

  const handleProjectEnter = useHandleMouseEnterItem(
    nodeRefProjectsSection.current !== null
      ? nodeRefProjectsSection.current.childNodes[1].childNodes
      : [],
    projectRef,
    "focus",
    "unfocus"
  );

  const handleProjectLeave = useHandleMouseLeaveItem(
    nodeRefProjectsSection.current !== null
      ? nodeRefProjectsSection.current.childNodes[1].childNodes
      : [],
    "focus",
    "unfocus"
  );

  return (
    <li
      ref={projectRef}
      className="group relative mb-6 flex flex-col gap-6 p-[20px] pr-[0px] transition-all min-[500px]:mb-0 min-[500px]:flex-row min-[500px]:hover:cursor-pointer"
      onClick={() => handleProjectClick("")}
      onMouseEnter={handleProjectEnter}
      onMouseLeave={handleProjectLeave}
    >
      <div className="order-2 w-[250px] rounded-md min-[500px]:order-1 min-[500px]:w-[150px]">
        <img
          src={imgSrc}
          alt=""
          className="h-[auto] w-[250px] max-w-full rounded-md border-[2px] border-imgBorder transition-all group-hover:border-imgBorderHover min-[500px]:min-w-[150px]"
        />
      </div>
      <div className="order-1 flex flex-col min-[500px]:order-2">
        <p
          onClick={() => handleProjectClick("force")}
          className="group-hover:text-green-500 text-start text-base font-[600] leading-none transition-all hover:cursor-pointer group-hover:text-green"
        >
          {projectName}
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
        <div className="mt-3">
          <p className="text-start text-sm text-whiteDimmed opacity-100">
            {projectDescription}
          </p>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {projectTechnologies.map((tech) => (
            <div
              key={tech}
              className="rounded-full bg-darkGreen pb-[5px] pl-[10px] pr-[10px] pt-[5px] text-xs font-medium text-greenLight"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </li>
  );
}
