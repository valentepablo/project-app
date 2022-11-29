import React, { useContext, useRef, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ProjectContext from '../context/ProjectContext';
import { Menu } from '@headlessui/react';
import { PlusSmallIcon, EllipsisVerticalIcon, TrashIcon } from '@heroicons/react/24/outline';
import { ListBulletIcon } from '@heroicons/react/24/solid';
import CollapseButton from './CollapseButton';

const Sidebar = () => {
  const { projects, createProject, deleteProject } = useContext(ProjectContext);
  const [collapsed, setCollapsed] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (projects.length === 0) navigate('/');
  }, [projects]);

  const projectNameRef = useRef();

  const handleCreateProject = () => {
    if (projectNameRef.current.value === '') {
      createProject('Nuevo proyecto');
    } else {
      createProject(projectNameRef.current.value);
    }
    projectNameRef.current.value = '';
  };

  const handleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div
      className={`${
        collapsed ? 'w-0' : 'w-80 p-4'
      }  duration-300 bg-white shadow rounded-xl relative`}>
      <div className='absolute -right-4 top-36'>
        <CollapseButton collapsed={collapsed} handleCollapsed={handleCollapsed} />
      </div>

      <div className='mb-16 space-y-2'>
        <input
          onKeyDown={(e) => e.key === 'Enter' && handleCreateProject()}
          ref={projectNameRef}
          type='text'
          placeholder='Nombre de proyecto...'
          className={`${
            collapsed && 'scale-0 opacity-0'
          } duration-300 origin-left block w-full px-3 py-5 text-sm rounded-md outline-none bg-slate-50 text-slate-500 placeholder:text-slate-400/60 hover:bg-slate-100 focus:bg-slate-100 placeholder:text-sm`}
        />
        <button
          onClick={handleCreateProject}
          className={`${
            collapsed && 'scale-0 opacity-0'
          } duration-300 origin-left flex items-center justify-center w-full gap-2 py-3 text-xs font-bold tracking-wider text-indigo-500 uppercase transition rounded-md cursor-pointer bg-indigo-50 hover:bg-indigo-100`}>
          <PlusSmallIcon className='w-5 h-5' />
          Crear proyecto
        </button>
      </div>
      <div>
        <div
          className={`${
            collapsed && 'scale-0 opacity-0'
          } duration-300 origin-left flex items-center gap-2 mb-4`}>
          <ListBulletIcon className='w-5 h-5 text-indigo-500' />
          <h3 className='text-sm font-bold tracking-wider text-indigo-400 uppercase'>Proyectos</h3>
        </div>
        <ul className='space-y-6'>
          {projects.map((project) => (
            <li
              key={project.name}
              className={`${
                collapsed && 'scale-0 opacity-0'
              } duration-300 origin-left relative flex items-center justify-between`}>
              <Link to={`/project/${project.id}`} className='text-sm font-semibold text-slate-500'>
                {project.name}
              </Link>
              <div className='relative'>
                <Menu>
                  <Menu.Button>
                    <EllipsisVerticalIcon className='w-6 h-6 -mr-2 cursor-pointer text-slate-400' />
                  </Menu.Button>
                  <Menu.Items className='absolute top-0 right-0 z-10 p-1 bg-white rounded-md shadow-md'>
                    <Menu.Item>
                      <button
                        className='flex items-center gap-2 p-3 text-sm font-medium whitespace-nowrap text-slate-500 hover:bg-slate-50'
                        onClick={() => deleteProject(project.id)}>
                        <TrashIcon className='w-5 h-5 text-indigo-400 shrink-0' />
                        Eliminar proyecto
                      </button>
                    </Menu.Item>
                    <Menu.Item>
                      <button
                        className='flex items-center gap-2 p-3 text-sm font-medium whitespace-nowrap text-slate-500 hover:bg-slate-50'
                        onClick={() => deleteProject(project.id)}>
                        <TrashIcon className='w-5 h-5 text-indigo-400 shrink-0' />
                        Eliminar proyecto
                      </button>
                    </Menu.Item>
                    <Menu.Item>
                      <button
                        className='flex items-center gap-2 p-3 text-sm font-medium whitespace-nowrap text-slate-500 hover:bg-slate-50'
                        onClick={() => deleteProject(project.id)}>
                        <TrashIcon className='w-5 h-5 text-indigo-400 shrink-0' />
                        Eliminar proyecto
                      </button>
                    </Menu.Item>
                  </Menu.Items>
                </Menu>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
