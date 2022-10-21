import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ProjectContext from '../context/ProjectContext';

const Dashboard = () => {
  const { projects } = useContext(ProjectContext);
  return (
    <div>
      <h1>Dashboard</h1>
      <div>
        {projects.map((project) => (
          <Link to={`/project/${project.id}`} key={project.id}>
            <div className='project-card'>{project.name}</div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
