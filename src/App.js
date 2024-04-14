import './App.css';

import Home from './pages/Home';

import { Routes, Route} from "react-router-dom";
import { useState } from 'react';


function App() {

  const [theme, setTheme] = useState("dark");

  const togleTheme = () => {
    setTheme((t) => t === "dark" ? "light" : "dark")
  }

  return (
    <div className="App" id={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </div>
    
  );
}

export default App;
