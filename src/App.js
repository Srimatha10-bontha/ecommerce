import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Shop from './Pages/Shop'
import Shopcategory from './Pages/Shopcategory'
import Product from './Pages/Product'
import Loginsignup from './Pages/Loginsignup'
import Cart from './Pages/Cart'
import './index.css'
import Footer from './Components/Footer/Footer'
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'

const App = () => {
  return (
    <div>

      <BrowserRouter>
      <Navbar/>

      <Routes>
      

      <Route  path='/shop' element={<Shop/>}/>
      <Route  path='mens' element={<Shopcategory banner={men_banner} category="men"/>}/>
      <Route  path='womens' element={<Shopcategory banner={women_banner} category="women"/>}/>
      <Route  path='kids' element={<Shopcategory banner={kids_banner} category="kid"/>}/>
      <Route path="/product" element={<Product/>}>
      <Route path=':productId' element={<Product/>}/>
      </Route>
       <Route path='/cart' element={<Cart/>}/>
       <Route path='/login' element={<Loginsignup/>}/>
      </Routes>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Footer/>
      </BrowserRouter>
  </div>
  )
}

export default App
