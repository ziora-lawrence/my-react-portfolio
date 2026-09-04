import Project from '../Data/Project';

const ProjectCard = () => {
  return (
    <div>
      {Project.map((project, index) => (
        <div key={project.id} className="w-80 h-auto rounded-4xl border-2 shadow-2xl border-white/40">
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <img src={project.image} alt={project.title} className="w-80 h-56 rounded-4xl" />
          </a>
          <div>
            <h1 className="ml-4 text-2xl text-red-500 font-extrabold">{project.title}</h1>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProjectCard
