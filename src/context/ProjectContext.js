import { useState, createContext, useEffect } from 'react';

const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState(JSON.parse(localStorage.getItem('projects') || []));

  const createProject = (projectRef) => {
    const newProject = {
      name: projectRef.current.value,
      id: projectRef.current.value,
      boards: [],
    };
    setProjects([...projects, newProject]);
  };

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

  const data = { projects, createProject };
  return <ProjectContext.Provider value={data}>{children}</ProjectContext.Provider>;
};

export { ProjectProvider };
export default ProjectContext;
