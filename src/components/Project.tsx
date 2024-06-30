import { useRef } from "react";
import {
  useHandleMouseEnterItem,
  useHandleMouseLeaveItem,
} from "./hooks/useHandleMouseEvent";

export default function Project({
  link,
  imgSrc,
  projectName,
  projectDescription,
  projectTechnologies,
  nodeRefProjectsSection,
}) {
  const handleProjectClick = () => {
    window.open(link, "_blank");
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
      className="group relative flex gap-6 p-[20px] transition-all hover:cursor-pointer"
      onClick={handleProjectClick}
      onMouseEnter={handleProjectEnter}
      onMouseLeave={handleProjectLeave}
    >
      <div className="w-[180px] rounded-md">
        <img
          src={imgSrc}
          alt=""
          className="group-hover:border-imgBorderHover border-imgBorder h-[auto] min-w-[180px] max-w-full rounded-md border-[2px] transition-all"
        />
      </div>
      <div className="flex flex-col">
        <p className="group-hover:text-green text-start text-base font-[600] leading-none transition-all group-hover:text-green-500">
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
          <p className="text-whiteDimmed text-start text-sm opacity-100">
            {projectDescription}
          </p>
        </div>
        <div className="mt-3 flex flex-wrap gap-2">
          {projectTechnologies.map((tech) => (
            <div
              key={tech}
              className="text-greenLight bg-darkGreen rounded-full pb-[5px] pl-[10px] pr-[10px] pt-[5px] text-xs font-medium"
            >
              {tech}
            </div>
          ))}
        </div>
      </div>
    </li>
  );
}
