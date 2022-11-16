import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar.jsx'
import Login from './Components/Login'
import Footer from './Components/Footer.jsx'

function App() {
  return (
    <div className="App">
      <div className="heading">
        <h1>Word<span>Pearl</span></h1>
      </div>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
