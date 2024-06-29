export default function Project({
  link,
  imgSrc,
  projectName,
  projectDescription,
}) {
  const handleProjectClick = () => {
    window.open(link, "_blank");
  };

  return (
    <li className="">
      <div
        className="group relative flex gap-4 transition-all hover:cursor-pointer"
        onClick={handleProjectClick}
      >
        <div className="col-auto w-[150px] rounded-md">
          <img
            src={imgSrc}
            alt=""
            className="h-[auto] min-w-[150px] max-w-full rounded-md border-[2px] border-[#2f3c51] transition-all group-hover:border-[#415471]"
          />
        </div>
        <div className="flex flex-col">
          <p className="text-start font-[600] leading-none transition-all group-hover:text-green-500">
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
            <p className="text-start text-sm opacity-80">
              {projectDescription}
            </p>
          </div>
        </div>
      </div>
    </li>
  );
}
