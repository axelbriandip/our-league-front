import './css/main.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Listings, Home, Nav } from './components/Index';

function App() {

  return (
    <div className="App">
      <HashRouter>
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/listings' element={<Listings/>}/>
        </Routes>
        {/* footer */}
      </HashRouter>
    </div>
  )
}

export default App;