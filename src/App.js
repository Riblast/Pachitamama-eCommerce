
import './App.css';
import { navBar } from './components/navBar.js';

function App() {
  return (
    <div className="App">
      <main className='bg-background w-full h-full bg-center bg- fixed'>
        {navBar()}
      </main>

    </div>
  );
}

export default App;
