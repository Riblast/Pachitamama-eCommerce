
import React from 'react'
import './App.css'
import NavBar from './components/NavBar'
import ItemDetailContainer from './components/ItemDetailContainer'




class App extends React.Component {
    render(){ 
        return(
            <div>
                <div className='bg-background bg-fixed bg-cover' id='Home'>
                    <NavBar/>
                    <ItemDetailContainer/>
                </div>
            </div>
        )
    }
}
export default App
