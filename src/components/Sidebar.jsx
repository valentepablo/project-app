import React, { useContext, useRef } from 'react';
import { Link } from 'react-router-dom';
import ProjectContext from '../context/ProjectContext';

const Sidebar = () => {
  const { projects, createProject } = useContext(ProjectContext);
  const projectNameRef = useRef();

  const handleCreateProject = () => {
    createProject(projectNameRef);
  };

  return (
    <div>
      <div>
        <input ref={projectNameRef} type='text' placeholder='nombre de proyecto' />
        <button onClick={handleCreateProject}>crear proyecto</button>
      </div>

      <ul>
        {projects.map((project) => (
          <li key={project.name}>
            <Link to={`/project/${project.id}`}>{project.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
