import './css/main.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Listings } from './components/Index';

function App() {

  return (
    <div className="App">
      <HashRouter>
        {/* nav */}
        <Routes>
          <Route path='/listings' element={<Listings/>}/>
        </Routes>
        {/* footer */}
      </HashRouter>
    </div>
  )
}

export default App;