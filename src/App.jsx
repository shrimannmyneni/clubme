import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Profile from './pages/Profile/profile';
import Login from './pages/Login/login';
import Layout from './components/layout'
import './App.css';

import Navbar from './components/Navbar/navbar'
import Footer from './components/Footer/footer';
import Dashboard from './pages/Dashboard/dashboard';

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
