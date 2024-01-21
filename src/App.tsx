import Home from "./views/Home/Home"
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <div className="w-full h-screen bg-white font-primary">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
