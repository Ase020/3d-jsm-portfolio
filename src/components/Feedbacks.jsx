import { motion } from "framer-motion";

import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => {
  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-black-200 rounded-3xl p-10 xs:w-[360px] w-full"
    >
      <p className="text-white font-black text-[48px]">"</p>

      <div className="mt-1">
        <p className="text-white text-[18px] tracking-wider">{testimonial}</p>

        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex flex-1 flex-col">
            <p className="text-white text-[16px] font-medium">
              <span className="blue-text-gradient">@</span>
              {name}
            </p>

            <p className="text-[12px] mt-1 text-secondary">
              {designation} of {company}
            </p>
          </div>

          <img
            src={image}
            alt={`feedback-by-${name}`}
            className="object-cover h-10 w-10 rounded-full"
          />
        </div>
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  return (
    <div className="mt-12 rounded-[20px] bg-black-100">
      <div
        className={`bg-tertiary ${styles.padding} rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What people say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>

      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard index={index} {...testimonial} key={testimonial.name} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
