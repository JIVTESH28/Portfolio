import {PROJECTS} from "../projects"

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className=" my-20 text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <div className="w-full lg:w-1/4">
            <img src={project.image} height={150} width={150} alt={project.title} className="mb-4 rounded" />
            </div>
            <div className="w-full max-w-xl lg:w-3/4">
                <h6 className="mb-2 font-semibold">{project.title}</h6>
                <p className="mb-4 text-neutral-400">{project.description}</p>
                {project.technologies.map((tech,index) =>  (
                  <span key={index} className="mr-2 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-cyan-400">{tech}</span>
               ) )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
