import React from 'react';

import Title from '../components/title/Title';
import PageTitle from '../components/page_title/PageTitle';
import Menu from '../components/menu/Menu';


function Body() {
  return <div>
          <Greeting></Greeting>
        </div>;
}

function Greeting() {
  return <span className='fade-item Greeting'>
    Hello, my name is Joe.
    Welcome to my website.
  </span>
}



function About() {

  return (
    <div className='GridContainer'>
        <Title></Title>
        <PageTitle title={"About"}></PageTitle>
        <Menu></Menu>
        <Body></Body>
    </div>
  );
}

export default About;
