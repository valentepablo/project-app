import { useContext, useState, useEffect, useRef } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ChevronLeftIcon, PlusSmallIcon } from '@heroicons/react/24/outline';

import ProjectContext from '../context/ProjectContext';

const ProjectContainer = () => {
  const { projects, setProjects, createBoard } = useContext(ProjectContext);
  const [selectedProject, setSelectedProject] = useState({});
  const [loading, setLoading] = useState(true);
  const id = useParams();
  const boardRef = useRef();

  const navigate = useNavigate();

  useEffect(() => {
    const copy = [...projects];
    const filtered = copy.find((project) => project.id === id.id);

    setSelectedProject(filtered);
    setLoading(false);
  }, [id]);

  // useEffect(() => {
  //   if (projects.find(selectedProject) === undefined) navigate('/');
  // }, [projects]);

  const handleCreateBoard = (boardRef) => {
    createBoard(boardRef.current.value);
  };

  return (
    <div className='flex flex-col grow'>
      <div className='px-4 py-5 mb-6 bg-white shadow rounded-xl'>
        <Link to='/' className='flex items-center gap-2'>
          <ChevronLeftIcon className='w-6 h-6 text-indigo-400' />
          <p className='text-sm font-bold tracking-wider text-indigo-400 uppercase'>Dashboard</p>
        </Link>
      </div>

      <div className='px-4 py-5 bg-white shadow rounded-xl grow'>
        <div className='flex items-center justify-between pb-4 border-b-2 border-indigo-100'>
          <h3 className='text-xl font-bold tracking-wider text-indigo-400 uppercase'>
            {selectedProject.name}
          </h3>

          <div className='flex items-center'>
            <input
              onKeyDown={(e) => e.key === 'Enter' && handleCreateBoard()}
              ref={boardRef}
              type='text'
              placeholder='Nueva lista...'
              className='p-3 text-sm rounded-md outline-none bg-slate-50 text-slate-500 placeholder:text-slate-400/60 hover:bg-slate-100 focus:bg-slate-100 placeholder:text-sm'
            />
            <button
              onClick={handleCreateBoard}
              className='flex items-center gap-2 px-2 py-3 ml-4 text-xs font-bold tracking-wider text-indigo-500 uppercase transition rounded-md cursor-pointer bg-indigo-50 hover:bg-indigo-100'>
              <PlusSmallIcon className='w-5 h-5' />
              Nueva lista
            </button>
          </div>
        </div>
        <div>
          {loading
            ? 'Cargando...'
            : selectedProject.boards.length > 0
            ? selectedProject.boards.map((board) => <div key={board.name}>{board.name}</div>)
            : 'Crea una nueva lista.'}
        </div>
      </div>
    </div>
  );
};

export default ProjectContainer;
