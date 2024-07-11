import { useMemo } from "react";

export const useIntroNodes = () => {
  const one = useMemo(
    () => <p className={`pb-2 text-start text-green`}>Hi, my name is</p>,
    []
  );

  const two = useMemo(
    () => (
      <p
        className={`text-start font-noto-sans text-[60px] font-[600] leading-none`}
      >
        Seva <span className={``}>Leo</span>.
      </p>
    ),
    []
  );

  const three = useMemo(
    () => (
      <p className="mt-4 w-[300px] text-start text-whiteDimmed">
        I'm a full-stack software developer specializing on building websites
        with React and NodesJS.
      </p>
    ),
    []
  );

  return useMemo(() => [one, two, three], [one, two, three]);
};

export const useAboutNodes = () => {
  const four = useMemo(
    () => (
      <p className="pb-2 text-start text-whiteDimmed">
        With 9 years of IT experience, including 3 years as a software
        developer, I began my career in 2014 at an international consulting
        firm, focusing on Salesforce projects.
      </p>
    ),
    []
  );

  const five = useMemo(
    () => (
      <p className="pb-2 text-start text-whiteDimmed">
        Over time, I mastered the intricacies of each project I joined, quickly
        developing an intuitive grasp of system dynamics, which naturally led me
        into an Architect role. In this role, I collaborated with other
        developers and teams to design scalable solutions.
      </p>
    ),
    []
  );

  const six = useMemo(
    () => (
      <p className="pb-2 text-start text-whiteDimmed">
        My career soon progressed into the business realm, where I transitioned
        into a Solution Architect. After a few years, I yearned to return to
        programming. I took a career break to update my knowledge of modern
        technologies and frameworks.
      </p>
    ),
    []
  );

  const seven = useMemo(
    () => (
      <p className="text-start text-whiteDimmed">
        Now, I enjoy creating full-stack applications, finding satisfaction in
        producing high-quality, reliable, and aesthetically pleasing code.
      </p>
    ),
    []
  );

  return useMemo(() => [four, five, six, seven], [four, five, six, seven]);
};

export const useTechNodes = () => {
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
        src="https://img.shields.io/badge/Mongoose.js-20232A?style=for-the-badge&logo=Mongoose"
        alt=""
      />
    ),
    []
  );
  const tech15 = useMemo(
    () => (
      <img
        src="https://img.shields.io/badge/Passport.js-20232A?style=for-the-badge&logo=Passport"
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
  const tech17 = useMemo(
    () => (
      <img
        src="https://img.shields.io/badge/mysql-20232A?style=for-the-badge&logo=mysql"
        alt=""
      />
    ),
    []
  );

  const tech18 = useMemo(
    () => (
      <img
        src="https://img.shields.io/badge/express-20232A?logo=express&style=for-the-badge"
        alt=""
      />
    ),
    []
  );

  const tech19 = useMemo(
    () => (
      <img
        src="https://img.shields.io/badge/vue.js-20232A?style=for-the-badge&logo=vue.js"
        alt=""
      />
    ),
    []
  );

  const tech20 = useMemo(
    () => (
      <img
        src="https://img.shields.io/badge/Jest-20232A?style=for-the-badge&logo=Jest"
        alt=""
      />
    ),
    []
  );

  return useMemo(
    () => [
      tech2, // typescript
      tech1, // javascript
      tech7, // html5
      tech8, // css
      tech3, // react
      tech19, // vue
      tech4, // node
      tech5, // tailwind
      tech18, // express
      tech14, // mongoose
      tech15, // passport
      tech16, // datefns
      tech13, // dndkit
      tech20, // jest
      tech9, // git
      tech10, // npm
      tech6, // mongodb
      tech17, // mysql
      tech11, // adaptable
      tech12, // netlify
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
      tech17,
      tech18,
      tech19,
      tech20,
    ]
  );
};

export const useConnectNodes = () => {
  const conn1 = useMemo(
    () => (
      <a
        href="https://github.com/sevleo"
        className="text-whiteDimmed opacity-60 hover:text-green hover:opacity-100"
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
        className="text-whiteDimmed opacity-60 hover:text-green hover:opacity-100"
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
        className="text-whiteDimmed opacity-60 hover:text-green hover:opacity-100"
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
        href="https://t.me/sevaleo"
        target="_blank"
        className="text-whiteDimmed opacity-60 hover:text-green hover:opacity-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="h-6 w-6"
          aria-hidden="true"
        >
          <path
            d="M23.1117 4.49449C23.4296 2.94472 21.9074 1.65683 20.4317 2.227L2.3425 9.21601C0.694517 9.85273 0.621087 12.1572 2.22518 12.8975L6.1645 14.7157L8.03849 21.2746C8.13583 21.6153 8.40618 21.8791 8.74917 21.968C9.09216 22.0568 9.45658 21.9576 9.70712 21.707L12.5938 18.8203L16.6375 21.8531C17.8113 22.7334 19.5019 22.0922 19.7967 20.6549L23.1117 4.49449ZM3.0633 11.0816L21.1525 4.0926L17.8375 20.2531L13.1 16.6999C12.7019 16.4013 12.1448 16.4409 11.7929 16.7928L10.5565 18.0292L10.928 15.9861L18.2071 8.70703C18.5614 8.35278 18.5988 7.79106 18.2947 7.39293C17.9906 6.99479 17.4389 6.88312 17.0039 7.13168L6.95124 12.876L3.0633 11.0816ZM8.17695 14.4791L8.78333 16.6015L9.01614 15.321C9.05253 15.1209 9.14908 14.9366 9.29291 14.7928L11.5128 12.573L8.17695 14.4791Z"
            fill="currentColor"
          />
        </svg>
      </a>
    ),
    []
  );

  const conn5 = useMemo(
    () => (
      <a
        href="https://leetcode.com/u/sevaleo/"
        target="_blank"
        className="text-whiteDimmed opacity-60 hover:text-green hover:opacity-100"
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

  return useMemo(
    () => [conn1, conn2, conn3, conn4, conn5],
    [conn1, conn2, conn3, conn4, conn5]
  );
};
