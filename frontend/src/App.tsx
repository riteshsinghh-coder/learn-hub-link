// import { useState } from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Landing}  from './components/Landing';
import {Room} from "./components/Room";

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<Landing/>}/>  
        <Route path='/room' element={<Room/>}/>  
      </Routes>
     </Router>
    </>
  )
}

export default App
