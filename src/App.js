import './App.css';


import Title from './components/title/Title';
import PageTitle from './components/page_title/PageTitle';
import Menu from './components/menu/Menu';
import Body from './components/body/Body';

import { useState } from 'react';


function App() {

  const [theme, setTheme] = useState("dark");

  const togleTheme = () => {
    setTheme((t) => t === "dark" ? "light" : "dark")
  }

  return (
    <div className="App" id={theme}>
      <div className='GridContainer'>
        <Title></Title>
        <PageTitle pageTitle={"Home"}></PageTitle>
        <Menu></Menu>
        <Body></Body>
      </div>
    </div>
  );
}

export default App;
