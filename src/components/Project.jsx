import {PROJECTS} from "../projects"

const Project = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h1 className=" my-20 text-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">Projects</h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index}>
            <img src={project.image} alt={project.title}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
