import Home from "./views/Home/Home"
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="w-full h-screen bg-white">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
