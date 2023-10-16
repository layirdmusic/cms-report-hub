import './App.css'
import {Route, Routes} from "react-router-dom"
import Home from './pages/Home'
import Regular from './Forms/regular'
import HotelEmilie from './Forms/hotel-emilie'



function App() {


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/regular" element={<Regular />} />
      <Route path="/hotel-emilie" element={<HotelEmilie />} />
    </Routes>
  )
}

export default App
