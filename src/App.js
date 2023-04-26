import logo from './logo.svg';
import './App.css';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Roompage from './room';
function App() {
  return (
    <div className="App">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="room/:roomid" element={<Roompage />} />
        
        
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
