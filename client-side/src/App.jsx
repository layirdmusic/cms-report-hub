import './App.css'
import {Route, Routes} from "react-router-dom"
import Home from './pages/Home'
import Regular from './Forms/regular'
import HotelEmilie from './Forms/hotel-emilie'
import Acorns from './Forms/acorns-east-orange'
import Toms from './Forms/toms-watch-bar'
import BigChicken from './Forms/big-chicken-sodo'
import Calculator from './pages/Calculator'
import Waldorf from './Forms/waldorf-astoria'
import FireStoneD from './Forms/firststone-davenport'



function App() {


  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/regular" element={<Regular />} />
      <Route path="/hotel-emilie" element={<HotelEmilie />} />
      <Route path="/acorns-east-orange" element={<Acorns />} />
      <Route path="/toms-watch-bar" element={<Toms />} />
      <Route path="/big-chicken-sodo" element={<BigChicken />} />
      <Route path="/waldorf-astoria" element={<Waldorf />} />
      <Route path="/firestone-davenport" element={<FireStoneD />} />
      <Route path="/calculator" element={<Calculator />} />
    </Routes>
  )
}

export default App
