import './App.css'
import {Route, Routes} from "react-router-dom"
import Home from './pages/Home'
import Regular from './Forms/regular'



function App() {


  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/regular" element={<Regular />} />
    </Routes>
  )
}

export default App
