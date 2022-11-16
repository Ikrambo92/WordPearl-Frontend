import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar.jsx'
import Login from './Components/Login'
import Footer from './Components/Footer.jsx'
import PearlGenerator from './Components/PearlGenerator'

function App() {
  return (
    <div className="App">
      <div className="heading">
        <h1>WordPearl</h1>
      </div>
      <Navbar />
      <Routes>
     <Route path='/PearlGenerator' element={<PearlGenerator/>}/>
     <Route path='/Login' element={<Login/>}/> 
     </Routes>
      <Footer />
    </div>
  );
}

export default App;
