
import React from 'react';
import './App.css';
import NavBar from "./components/NavBar"
import ItemListContainer from './components/ItemListContainer';


class App extends React.Component {
  render(){
    return(
      <div className='bg-background h-screen w-screen'>
        <NavBar/>
        <ItemListContainer greeting={"Buenos días"}/>
      </div>
    )
  }

}
export default App;
