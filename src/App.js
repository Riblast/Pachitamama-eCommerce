
import React from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Cart from './components/Cart'
import AboutUs from './components/AboutUs'
import CartProvider from './context/CartContext'
import AuthProvider from './context/AuthContext'
import Register from './components/Register'
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Profile from './components/Profile'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


class App extends React.Component {
    render(){ 
        return(
            <div>
                <ToastContainer draggable={false} closeOnClick={false} />
                <div className='bg-background bg-fixed bg-cover' id='Home'>
                    <Router>
                        <AuthProvider>
                            <CartProvider>
                                <NavBar/>
                                <Routes>
                                    <Route path='/' element={<ItemListContainer/>}/>
                                    <Route path='/menu' element={<ItemListContainer/>}/>
                                    <Route path='/menu/:categoriaId' element={<ItemListContainer/>}/>
                                    <Route path='/carrito' element={<Cart/>}/>
                                    <Route path='/item/:id' element={<ItemDetailContainer/>}/>
                                    <Route path='/aboutUs' element={<AboutUs/>}/>
                                    <Route path='/register' element={<Register/>}/>
                                    <Route path='/login' element={<Login />}/>
                                    <Route path='/profile' element={<ProtectedRoute><Profile /></ProtectedRoute>}/>
                                </Routes>
                            </CartProvider>
                        </AuthProvider>
                    </Router>
                </div>
            </div>
        )
    }
}
export default App
