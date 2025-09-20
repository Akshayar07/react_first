import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing/Landing.jsx'
import Profile from './pages/Profile/ProfileCard.jsx'
import Counter from './pages/Counter/Counter.jsx'
import Todo from './pages/Todo/Todo.jsx'
import Contact from './pages/Contact/Contact.jsx'
import Product from './pages/product/product.jsx'
import ProductDetail from './pages/product/ProductDetail.jsx'
import Login from './pages/login/login.jsx'

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
          <Route path='/contact' element={<Contact />} />
          <Route path='/product' element={<Product />} />
          <Route path='/product/:id' element={<ProductDetail />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
