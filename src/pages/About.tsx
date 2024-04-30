import React from 'react';

import Title from '../components/title/Title';
import PageTitle from '../components/page_title/PageTitle';
import Menu from '../components/menu/Menu';
// import Body from '../components/body/Body';



function About() {

  return (
    <div className='GridContainer'>
        <Title></Title>
        <PageTitle title={"About"}></PageTitle>
        <Menu></Menu>
        {/* <Body></Body> */}
    </div>
  );
}

export default About;
