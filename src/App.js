import {Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import BuySell from "./pages/buySell";
import FnI from "./pages/FnI";

function App() {
  return (
    <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buySell" element={<BuySell />} />
          <Route path="/FnI" element={<FnI />} />
          <Route path="/Sub" element={<Home />} />
        </Routes>
        <Footer />
    </div>
  );
}

export default App;