import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing/Landing.jsx'
import Profile from './pages/Profile/ProfileCard.jsx'
import Counter from './pages/Counter/Counter.jsx'
import Todo from './pages/Todo/Todo.jsx'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/landing' element={<Landing />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/counter' element={<Counter />} />
          <Route path='/todo' element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
