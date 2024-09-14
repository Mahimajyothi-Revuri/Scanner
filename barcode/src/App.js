// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Addstudent from './components/Addstudent';
import Report from './components/Report';
import Student from './components/Student';
import Barscan from './components/Barscan';

function App() {
  return (
    <>
    <div className='container-fluid' style={{height:'800px',background:''}}>
    <div className='row'>
    <BrowserRouter>
    <Sidebar></Sidebar>
     
    <Routes>
    <Route path="/attendance" element={<Barscan/>}></Route>
    <Route path="/Addstudent" element={<Addstudent/>}></Route>
    <Route path="/report" element={<Report/>}></Route>
    <Route path="/student" element={<Student/>}></Route>
    
    </Routes>
   
    
  </BrowserRouter>
      
    <Content></Content>
    </div>
    </div>

    </>


  );
}

export default App;
