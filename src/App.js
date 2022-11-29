import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import ProjectContainer from './components/ProjectContainer';
import Sidebar from './components/Sidebar';
import { ProjectProvider } from './context/ProjectContext';

function App() {
  return (
    <ProjectProvider>
      <div className='flex h-screen gap-8 p-4 bg-slate-50'>
        <Router>
          <Sidebar />
          <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/project/:id' element={<ProjectContainer />} />
          </Routes>
        </Router>
      </div>
    </ProjectProvider>
  );
}

export default App;
