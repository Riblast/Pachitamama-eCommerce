
import React from 'react';
import './App.css';
import NavBar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer';



class App extends React.Component {
  render(){
    return(
      <div>
        <div className='bg-background bg-cover h-screen w-screen' id='Home'>
          <NavBar/>
          <ItemListContainer/>
        </div>
        <div id='Menu'>
        </div>
        <div id='AboutUs'></div>
      </div>
    )
  }

}
export default App;
