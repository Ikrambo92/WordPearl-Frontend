import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar.jsx'
import Login from './Components/Login'
import Footer from './Components/Footer.jsx'
import PearlGenerator from './Components/PearlGenerator'
import Pearls from './Components/Pearls'
import Comments from './Components/Comments'
import SinglePearl from './Components/SinglePearl'
import Signup from './Components/Signup'
import Home from './Components/Home'
import SingleOyster from './Components/SingleOyster'
import { UserContext } from './Context/UserContext'
import { useState } from 'react'
import Signup from './Components/Signup'
import Home from './Components/Home'
import LeaderBoard from './Components/LeaderBoard'

function App() {

  const [user, setUser] = useState({})
  console.log(user)

  return (
    <div className="App">
      <div className="heading">
        <h1>Word<span>Pearl</span></h1>
      </div>
      <Navbar />
      <UserContext.Provider value={{user, setUser}}>
      <Routes>
        <Route path='/Login' element={<Login />} />
        <Route path='/Pearls' element={<Pearls />} />
        <Route path="/Pearls/:id" element={<SinglePearl />}></Route>
        <Route path='/Comments' element={<Comments />} />
        {/* <Route path='/Oysters/:id' element={<SingleOyster />} /> */}
        <Route path='/PearlGenerator' element={<PearlGenerator />} />
        {/* <Route path='/SuccessfulPearl' element={<Pearls />} /> */}
        <Route path='/Signup' element={<Signup />} />
        <Route path='/' element={<Home />} />
        <Route path='/LeaderBoard' element={<LeaderBoard />} />
      </Routes>
      </UserContext.Provider>
      <Footer />
    </div>
  );
}


export default App;
