import PageLayout from "./components/PageLayout/PageLayout"
import Browse from "./views/Browse/Browse"
import Home from "./views/Home/Home"
import { Routes, Route } from 'react-router-dom'
import Register from "./views/Register/Register"
import Login from "./views/Login/Login"
import Account from "./views/Account/Account"

function App() {

  return (
    <div className="w-full h-screen bg-white font-primary">
      <Routes>
        <Route element={<PageLayout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/browse/:product" element={<Browse />} />
          <Route path="/account" element={<Account />} />
        </Route>
        <Route>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
    </div>
  )
}

export default App
