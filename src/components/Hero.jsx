import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="relative w-full h-[100vh] mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="violet-gradient w-1 sm:h-80 h-40" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Felix Nyalenda</span>
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop Web applications, User <br className="sm:block hidden" />
            Interfaces, and 3D visuals.
          </p>
        </div>
      </div>
      <ComputersCanvas />

      <div className="absolute sm:bottom-10 bottom-32 flex items-center justify-center w-full">
        <a href="#about">
          <div className="rounded-3xl w-[35px] border-secondary border-4 h-[64px] p-2 flex items-start justify-center">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
