import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import City from './components/City'
import Nav from './components/Nav';
import SignUp from './components/SignUp'



function App() {
  return (
    <div className="App">
      <header className='nav'>
        <Nav />
      </header>
      <main>
      <Routes>
        <Route path = "/" element={ <Home /> }/>
        <Route path ="/:id" element={ <City /> }/>
        <Route path="/signup" element={ <SignUp /> }/>
      </Routes>
      </main>
      
    </div>
  );
}

export default App;
