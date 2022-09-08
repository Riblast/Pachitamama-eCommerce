
import React from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Cart from './components/Cart'
import AboutUs from './components/AboutUs'




class App extends React.Component {
    render(){ 
        return(
            <div>
                <div className='bg-background bg-fixed bg-cover' id='Home'>
                    <Router>
                        <NavBar/>
                        <Routes>
                            <Route path='/' element={<ItemListContainer/>}/>
                            <Route path='/categoria' element={<ItemListContainer/>}/>
                            <Route path='/carrito' element={<Cart/>}/>
                            <Route path='/detalle/:id' element={<ItemDetailContainer/>}/>
                            <Route path='/AboutUs' element={<AboutUs/>}/>
                        </Routes>
                    </Router>
                </div>
            </div>
        )
    }
}
export default App
