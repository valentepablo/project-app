import { useState, createContext, useEffect } from 'react';

const ProjectContext = createContext();

const ProjectProvider = ({ children }) => {
  const [projects, setProjects] = useState(JSON.parse(localStorage.getItem('projects')) || []);

  // CREAR PROYECTO
  const createProject = (projectRef) => {
    const newProject = {
      name: projectRef,
      id: projectRef,
      boards: [],
    };
    setProjects([...projects, newProject]);
  };

  // ELIMINAR PROYECTO
  const deleteProject = (id) => {
    const copy = [...projects];
    const filtered = copy.filter((project) => project.id !== id);
    setProjects(filtered);
  };

  // CREAR BOARD
  const createBoard = (name) => {
    const newBoard = {
      name: name || 'Nueva lista',
      id: name,
      tasks: [],
    };
  };

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

  const data = { projects, createProject, deleteProject, createBoard };
  return <ProjectContext.Provider value={data}>{children}</ProjectContext.Provider>;
};

export { ProjectProvider };
export default ProjectContext;
