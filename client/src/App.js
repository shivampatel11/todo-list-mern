
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Todoapp from './component/todo.js'


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todoapp />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
