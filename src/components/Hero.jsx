// import { delay } from "framer-motion";
import { motion } from "framer-motion";
import profilepic from "../assets/jivtesh.png";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Jivtesh S
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Full Stack Developer,
            </motion.span>
            <motion.span
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent"
            >
              Machine Learning Developer
            </motion.span>
            <motion.p
              variants={container(1.5)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {" "}
              A machine learning developer with a strong foundation in
              full-stack development, I specialize in creating intelligent
              applications that bridge the gap between advanced analytics and
              user-centric design. With expertise in building, training, and
              deploying machine learning models, I focus on end-to-end solutions
              that are scalable, efficient, and accessible. From back-end model
              integration to responsive front-end interfaces, my work brings
              innovative technology to life through seamless and engaging user
              experiences.
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img initial={{x: 100 , opacity: 0}} animate={{x: 0, opacity: 1}} transition={{ duration: 1 , delay: 2}} className="rounded-2xl" src={profilepic} alt="Jivtesh" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
