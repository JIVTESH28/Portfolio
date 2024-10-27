import profilepic from "../assets/jivtesh.png";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl">
              Jivtesh S
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Full Stack Developer,
            </span>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
              Machine Learning Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
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
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img className="rounded-2xl" src={profilepic} alt="Jivtesh" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
