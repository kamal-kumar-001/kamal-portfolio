import './Details.scss';

function ProjectDetail({ project }) {
  return (
    <div className="ProjectDetail">
      <div className="ProjectDetail__header">
        <h1>{project.title}</h1>
        <p>{project.description}</p>
      </div>

      <div className="ProjectDetail__images">
        {project.images?.map((image, index) => (
          <img key={index} src={image} alt={`${project.title} screenshot ${index + 1}`} />
        ))}
      </div>

      {project.link && (
            <p className='text-2xl'><strong>Live Project:</strong> <a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a></p>
          )}
          <br/>
      <div className="ProjectDetail__content text-xl">
        <div className="ProjectDetail__tech">
          <strong>Technologies Used</strong>
          <ul>
            {project.technologies?.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>

        <div className="ProjectDetail__details">
          <strong>Project Details</strong>
          <p>{project.details}</p>
        </div>

        <div className="ProjectDetail__additional">
          <strong>Additional Information</strong>
          <p><strong>Role:</strong> {project.role}</p>
          <p><strong>Challenges:</strong> {project.challenges}</p>
          {project.repository && (
            <p><strong>Repository:</strong> <a href={project.repository} target="_blank" rel="noopener noreferrer">{project.repository}</a></p>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectDetail;
