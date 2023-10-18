import './App.css'
import {Route, Routes} from "react-router-dom"
import Home from './pages/Home'
import Regular from './Forms/regular'
import HotelEmilie from './Forms/hotel-emilie'
import Acorns from './Forms/acorns-east-orange'
import Toms from './Forms/toms-watch-bar'



function App() {


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/regular" element={<Regular />} />
      <Route path="/hotel-emilie" element={<HotelEmilie />} />
      <Route path="/acorns-east-orange" element={<Acorns />} />
      <Route path="/toms-watch-bar" element={<Toms />} />
    </Routes>
  )
}

export default App
