import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile/Profile';
import Login from './pages/Login/Login';
import Dashboard from './pages/Dashboard/Dashboard';

import Layout from './components/layout'
import './App.css';

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Navbar/>
      <Layout>
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Layout>
      <Footer/>
    </Router>
  );
}

export default App;
