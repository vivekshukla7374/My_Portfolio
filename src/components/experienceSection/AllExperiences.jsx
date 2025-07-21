import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Front-End Development Learner",
    company: "Project-Based Learning",
    date: "2024 - Present",
    responsibilities: [
      "Practicing reusable component creation using React.",
      "Improving app performance through optimization techniques.",
      "Experimenting with new ideas to enhance user experience.",
    ],
  },
  {
    job: "Web Development Student",
    company: "Nucamp Bootcamp",
    date: "2024 - Present",
    responsibilities: [
      "Learning core front-end technologies including HTML, CSS, JavaScript, and React.",
      "Completing weekly assignments and hands-on projects.",
      "Engaging with mentors and seeking help when needed.",
    ],
  },
  {
    job: "React & TailwindCSS Student",
    company: "Sprints Online Program",
    date: "2025 - Present",
    responsibilities: [
      "Studying JavaScript, React, and TailwindCSS in depth.",
      "Participating in online workshops and collaborative learning.",
      "Creating responsive and dynamic web components.",
    ],
  },
];


const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
