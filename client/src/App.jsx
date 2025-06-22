import './App.css';
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import Addmilestone from './pages/Addmilestone'; 
import Tips from './pages/Tips';
import Milestones from './pages/Milestones';

function App() {   
  return (
    <BrowserRouter> 
    <Navbar />
      <Routes>
        <Route path="/" element={<Login />} /> 
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/milestones" element={<Milestones />} /> 
        <Route path="/milestone/add" element={<Addmilestone />} /> 
        <Route path="/milestone/:id/tips" element={<Tips />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App;