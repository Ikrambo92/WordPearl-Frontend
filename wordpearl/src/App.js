import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'
import Login from './Components/Login'
import Footer from './Components/Footer.jsx'
import PearlGenerator from './Components/PearlGenerator'
import Pearls from './Components/Pearls'
import Comments from './Components/Comments'
import Oysters from './Components/Oysters'
import SuccessfulPearl from './Components/SuccessfulPearl'
import SinglePearl from './Components/SinglePearl'
import Signup from './Components/Signup'
import Home from './Components/Home'
import SingleOyster from './Components/SingleOyster'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/Login' element={<Login />} />
        <Route path='/Pearls' element={<Pearls />} />
        <Route path="/Pearls/:id" element={<SinglePearl />}></Route>
        <Route path='/Comments' element={<Comments />} />
        <Route path='/Oysters/:id' element={<SingleOyster />} />
        <Route path='/PearlGenerator' element={<PearlGenerator />} />
        <Route path='/SuccessfulPearl' element={<Pearls />} />
        <Route path='/Signup' element={<Signup />} />
        <Route path='/' element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}


export default App;
