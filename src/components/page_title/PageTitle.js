import '../Common.css'
import './PageTitle.css'

import React, { Component } from 'react';


function PageTitle({pageTitle}) {
  return <div className='PageTitle'>
      <span>{pageTitle}</span>
    </div>
}


export default PageTitle;