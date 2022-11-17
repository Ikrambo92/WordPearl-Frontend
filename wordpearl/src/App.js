import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar.jsx'
import Login from './Components/Login'
import Footer from './Components/Footer.jsx'
import PearlGenerator from './Components/PearlGenerator'
import Pearls from './Components/Pearls'
import Comments from './Components/Comments'
import Oysters from './Components/Oysters'
import SuccessfulPearl from './Components/SuccessfulPearl'
import SinglePearl from './Components/SinglePearl'


function App() {
  return (
    <div className="App">
      <div className="heading">
        <h1>Word<span>Pearl</span></h1>
      </div>
      <Navbar />
      <Routes>
        <Route path='/Login' element={<Login />} />
        <Route path='/Pearls' element={<Pearls />} />
        <Route path="/pearls/:id" element={<SinglePearl />}></Route>

        <Route path='/Comments' element={<Comments />} />
        <Route path='/Oysters' element={<Oysters />} />
        <Route path='/PearlGenerator' element={<PearlGenerator />} />
        <Route path='/SuccessfulPearl' element={<Pearls />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
