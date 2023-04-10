import SectionWrapper from "../hoc/SectionWrapper";
import BallCanvas from "./canvas/Ball";
import { technologies } from "../constants/index";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map(({ name, icon }) => (
        <div key={name} className="h-28 w-28">
          <BallCanvas icon={icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
