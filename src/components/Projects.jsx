function Projects(props) {
  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {
            props.projects.map((project)=>(
            <li id={project.id} key={project.id}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
            </li>
            ))
        }
      </ul>
    </div>
  );
}
export default Projects;