import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import City from './components/City'
import Nav from './components/Nav';
import SignUp from './components/SignUp'
import AddCity from './components/AddCity';
import AddListing from './components/AddListing';
import EditListing from './components/EditListing';
import EditCity from './components/EditCity';



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
        <Route path='/addcity' element={ <AddCity />}/>
        <Route path='/addlisting/:id' element={ <AddListing />}/>
        <Route path='/listings/:id' element={ <EditListing />}/>
        <Route path='/city/:id' element={ <EditCity />}/>
      </Routes>
      </main>

    </div>
  );
}

export default App;
