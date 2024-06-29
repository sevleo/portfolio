export default function Experience({ dates, roleCompany, jobDescription }) {
  const linkMap = {
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

  const createLinkedDescription = (description) => {
    const words = description.split(" ");
    return words.map((word, index) => {
      const cleanWord = word.replace(/[^a-zA-Z]/g, ""); // Remove punctuation
      if (linkMap[cleanWord]) {
        return (
          <a
            key={index}
            href={linkMap[cleanWord]}
            target="_blank"
            className="text-green hover:text-greenLight underline opacity-100 hover:no-underline"
          >
            <span>{word} </span>
          </a>
        );
      }
      return <span key={index}>{word} </span>;
    });
  };

  return (
    <li className="group relative flex gap-6 transition-all">
      <div className="min-w-[180px]">
        <p className={`text-whiteDimmed text-end text-sm`}>{dates}</p>
      </div>
      <div className="flex flex-col">
        <p className="group-hover:text-green text-start text-base font-[600] leading-none transition-all">
          {roleCompany}
        </p>
        <div className="mt-3 flex flex-col gap-2">
          {jobDescription.map((description) => (
            <p
              key={createLinkedDescription(description)}
              className="text-whiteDimmed text-start text-sm"
            >
              {createLinkedDescription(description)}
            </p>
          ))}
        </div>
      </div>
    </li>
  );
}
