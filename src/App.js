
import React from 'react';
import './App.css';
import Header from "./components/Header"


class App extends React.Component {
  render(){
    return(
      <div className='bg-background h-full w-full fixed'>
        <Header/>
      </div>
    )
  }

}
export default App;
