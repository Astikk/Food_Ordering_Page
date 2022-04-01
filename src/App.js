import './App.css';
import Slide from './components/Side';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Main from './components/Main';
import Home from './components/home';

function App() {
  return (
    <Router>
    <div className="App">
      <Slide/>
      <Routes>
    
        <Route path='/home.js' element={<Home/>}/>
        <Route path='/Main.js' element={<Main/>}/>

      </Routes>
      
    </div>
    </Router>
  );
}

export default App;
