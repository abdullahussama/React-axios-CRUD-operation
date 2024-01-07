import './App.css';
import Create from './Components/Create';
import Read from './Components/Read';
import Update from './Components/Update';
import { Routes, Route, Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
function App() {
  return (
    <>
    
    <div className="main">
    <h2 className="main-header">React Crud Operations</h2>
    <Routes>
          <Route path='/' element={<Read/>}/>     
          <Route path='create' element={<Create/>}/>
          <Route path='read' element={<Read/>} />
          <Route path='update' element={<Update/>} />
      
    </Routes>
    </div>
    </>
  );
}

export default App;
