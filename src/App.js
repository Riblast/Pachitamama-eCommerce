
import React from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Cart from './components/Cart'
import AboutUs from './components/AboutUs'
import CartProvider from './CartContext'


class App extends React.Component {
    render(){ 
        return(
            <div>
                <div className='bg-background bg-fixed bg-cover' id='Home'>
                    <Router>
                        <CartProvider>
                            <NavBar/>
                            <Routes>
                                <Route path='/' element={<ItemListContainer/>}/>
                                <Route path='/category' element={<ItemListContainer/>}/>
                                <Route path='/carrito' element={<Cart/>}/>
                                <Route path='/item/:id' element={<ItemDetailContainer/>}/>
                                <Route path='/AboutUs' element={<AboutUs/>}/>
                            </Routes>
                        </CartProvider>
                    </Router>
                </div>
            </div>
        )
    }
}
export default App
