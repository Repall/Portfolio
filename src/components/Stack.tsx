import stackData from "../data/StackData";
// import { StackCategory } from "../data/Types";

export default function Stack() {
  return (
    <>
      <article className="flex flex-col justify-center p-10 border-8 border-double hover:bg-gradient-1 duration-500 border-secondary rounded-full m-12">
        <h3 className="text-center text-4xl sm:text-5xl">Skills</h3>
        <div className="flex flex-row flex-wrap justify-evenly gap-4 mt-10">
          {stackData.map((category, index) =>
            category.skills?.map((skill, skillIndex) => (
              <div key={`${index}-${skillIndex}`} className="flex flex-col justify-center items-center text-center gap-5">
                <img src={skill.image} alt={`logo ${skill.title}`} className="w-10 h-10 sm:w-24 sm:h-24" />
                <p className="font-bold max-sm:text-sm">{skill.title}</p>
              </div>
            ))
          )}
        </div>
      </article>
      <article className="flex flex-col justify-center max-[374px]:items-center p-10 border-8 border-dotted border-secondary rounded-full m-12">
        <h3 className="text-center text-4xl sm:text-5xl">Objectifs</h3>
        <div className="flex flex-row flex-wrap justify-evenly gap-4 mt-10">
          {stackData.map((category, index) =>
            category.prochainement?.map((item, itemIndex) => (
              <div key={`${index}-${itemIndex}`} className="flex flex-col justify-center items-center text-center gap-5">
                <img src={item.image} alt={`logo ${item.title}`} className="w-10 h-10 sm:w-24 sm:h-24" />
                <p className="font-bold max-sm:text-sm">{item.title}</p>
              </div>
            ))
          )}
        </div>
      </article>
    </>
  );
}
