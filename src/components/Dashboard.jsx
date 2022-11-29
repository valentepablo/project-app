import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ProjectContext from '../context/ProjectContext';
import { ChevronRightIcon, Squares2X2Icon } from '@heroicons/react/24/outline';

const Dashboard = () => {
  const { projects } = useContext(ProjectContext);
  return (
    <div className='grow'>
      <div className='flex items-center gap-2 px-4 py-5 mb-6 bg-white shadow rounded-xl'>
        <Squares2X2Icon className='w-6 h-6 text-indigo-400' />
        <h1 className='text-sm font-bold tracking-wider text-indigo-400 uppercase'>Dashboard</h1>
      </div>
      <div className='grid grid-cols-6 gap-8'>
        {projects.length > 0 ? (
          projects.map((project) => (
            <Link to={`/project/${project.id}`} key={project.id}>
              <div className='flex items-center justify-between px-4 py-10 text-lg font-semibold transition bg-white shadow rounded-xl text-slate-500'>
                {project.name}
                <ChevronRightIcon className='w-5 h-5' />
              </div>
            </Link>
          ))
        ) : (
          <button className='px-2 text-left text-slate-400 text-md whitespace-nowrap'>
            Crea un nuevo proyecto.
          </button>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
