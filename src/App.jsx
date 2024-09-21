
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './assets/Pages/Home'
import Wishlist from './assets/Pages/Wishlist'
import View from './assets/Pages/View'
import Cart from './assets/Pages/Cart'

function App() {
  

  return (
    <>
    <Header/>
    <Routes>

<Route path='/' element={<Home/>}/>
<Route path='/wishlist' element={<Wishlist/>}/>
<Route path='/cart' element={<Cart/>}/>
<Route path='/view/:id' element={<View/>}/>
<Route path='/*' element={<Navigate to={'/'}/>}/>



    </Routes>

    <Footer/>
    </>
  )
}

export default App
