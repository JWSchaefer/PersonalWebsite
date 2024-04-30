import '../Common.css'
import './PageTitle.css'

import React, { Component } from 'react';

export interface PageTitleProps {
  title: string;
}

function PageTitle({ title } : PageTitleProps) {
  return <div className='PageTitle'>
      <span>{title}</span>
    </div>
}


export default PageTitle;