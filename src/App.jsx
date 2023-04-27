import { Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Home from "./pages/Home"
import AddTodo from "./pages/AddTodo"


function App() {
  return (
    <div>
     <Navbar/>
     <Routes>
      <Route path="/" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/dashboard" element={<Home/>} />
      <Route path="/addtodo" element={<AddTodo/>} />
</Routes>     
    </div>
  )
  
}

export default App
