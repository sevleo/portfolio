import { useRef, RefObject } from "react";
import {
  useHandleMouseEnterItem,
  useHandleMouseLeaveItem,
} from "./hooks/useHandleMouseEvent";

interface ExperienceProps {
  dates: string;
  roleCompany: string;
  jobDescription: string[];
  nodeRefExperienceSection: RefObject<HTMLElement>;
}

export default function Experience({
  dates,
  roleCompany,
  jobDescription,
  nodeRefExperienceSection,
}: ExperienceProps) {
  interface LinkMapProps {
    Aura: string;
    Lightning: string;
    Visualforce: string;
    ApexClasses: string;
    ApexTriggers: string;
    ApexBatches: string;
    YoGato: string;
    LeetCode: string;
  }
  const linkMap: LinkMapProps = {
    Aura: "https://developer.salesforce.com/docs/component-library/bundle/aura:component/documentation",
    Lightning: "https://developer.salesforce.com/docs/platform/lwc/overview",
    Visualforce:
      "https://developer.salesforce.com/docs/atlas.en-us.pages.meta/pages/pages_compref_page.htm",
    ApexClasses:
      "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_dev_guide.htm",
    ApexTriggers:
      "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_triggers.htm",
    ApexBatches:
      "https://developer.salesforce.com/docs/atlas.en-us.apexcode.meta/apexcode/apex_batch.htm",
    YoGato: "https://yogato.netlify.app/",
    LeetCode: "https://leetcode.com/u/sevaleo/",
  };

  const createLinkedDescription = (description: string) => {
    const words = description.split(" ");
    return words.map((word, index) => {
      const cleanWord = word.replace(/[^a-zA-Z]/g, ""); // Remove punctuation
      if (linkMap[cleanWord as keyof LinkMapProps]) {
        return (
          <a
            key={index}
            href={linkMap[cleanWord as keyof LinkMapProps]}
            target="_blank"
            className="underline opacity-100 hover:no-underline group-hover:text-green group-hover:hover:text-greenLight"
          >
            <span>{word} </span>
          </a>
        );
      }
      return <span key={index}>{word} </span>;
    });
  };

  const experienceRef = useRef(null);

  const handleExperienceEnter = useHandleMouseEnterItem(
    nodeRefExperienceSection.current !== null
      ? nodeRefExperienceSection.current.childNodes[1].childNodes
      : [],
    experienceRef,
    "focus",
    "unfocus"
  );

  const handleExperienceLeave = useHandleMouseLeaveItem(
    nodeRefExperienceSection.current !== null
      ? nodeRefExperienceSection.current.childNodes[1].childNodes
      : [],
    "focus",
    "unfocus"
  );

  return (
    <li
      ref={experienceRef}
      className="group relative flex flex-col gap-2 p-[20px] pr-[0px] transition-all min-[500px]:flex-row min-[500px]:gap-6"
      onMouseEnter={handleExperienceEnter}
      onMouseLeave={handleExperienceLeave}
    >
      <div className="min-w-[150px]">
        <p
          className={`text-start text-sm text-whiteDimmed opacity-60 min-[500px]:text-end`}
        >
          {dates}
        </p>
      </div>
      <div className="flex flex-col">
        <p className="text-start text-base font-[600] leading-none transition-all group-hover:text-green">
          {roleCompany}
        </p>
        <div className="mt-3 flex flex-col gap-2">
          {jobDescription.map((description, index) => (
            <p key={index} className="text-start text-sm text-whiteDimmed">
              {createLinkedDescription(description)}
            </p>
          ))}
        </div>
      </div>
    </li>
  );
}
