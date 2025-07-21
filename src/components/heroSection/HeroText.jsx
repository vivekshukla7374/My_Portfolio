// import { motion } from "framer-motion";
// import { fadeIn } from "../../framerMotion/variants";

// const HeroText = () => {
//   return (
//     <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
//       <motion.h2
//         variants={fadeIn("down", 0.2)}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: false, amount: 0 }}
//         className="lg:text-2xl sm:text-xl  uppercase text-lightGrey "
//       >
//         Front - End Web Developer
//       </motion.h2>
//       <motion.h1
//         variants={fadeIn("right", 0.4)}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: false, amount: 0 }}
//         className="md:text-[2.8rem] lg:text-6xl sm:text-4xl text-orange font-bold uppercase"
//       >
//         Vivek <br className="sm:hidden md:block" />
//         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Shukla
//       </motion.h1>
//       <motion.p
//         variants={fadeIn("up", 0.6)}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: false, amount: 0 }}
//         className="text-lg mt-4"
//       >
//         "I'm Vivek, Passionate Web Developer & Student Instructor with 1 year of experience in <br />creating responsive websites and mentoring peers in web development basics."
//       </motion.p>
//     </div>
//   );
// };

// export default HeroText;


import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { Typewriter } from "react-simple-typewriter";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center md:text-left sm:text-center">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="lg:text-2xl sm:text-xl uppercase text-lightGrey"
      >
        Hello, It's Me
        <h1>Vivek Shukla</h1>
        <h3>And I'm a</h3>
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="md:text-[2.2rem] lg:text-5xl sm:text-3xl text-orange font-bold uppercase h-[120px]"
      >
        <Typewriter
          words={["Frontend Developer", "Web Developer", "UI/UX Designer","Coder"]}
          loop={false}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={50}
          delaySpeed={1500}
        />
      </motion.h1>

      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4"
      >
        "I'm Vivek, Passionate Web Developer & Student Instructor with 1 year of experience in <br />creating responsive websites and mentoring peers in web development basics."
      </motion.p>
    </div>
  );
};

export default HeroText;
