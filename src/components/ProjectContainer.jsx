import { useContext, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import ProjectContext from '../context/ProjectContext';

const ProjectContainer = () => {
  const { projects } = useContext(ProjectContext);
  const [selectedProject, setSelectedProject] = useState({});
  const id = useParams();

  useEffect(() => {
    const copy = [...projects];
    const filtered = copy.find((project) => project.id === id.id);

    setSelectedProject(filtered);
  }, [id]);

  return (
    <div>
      <Link to='/'>Dashboard</Link>
      <div>{selectedProject.name}</div>
    </div>
  );
};

export default ProjectContainer;
