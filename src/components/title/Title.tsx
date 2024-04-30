import '../Common.css'
import './Title.css'

import React, { Component } from 'react';
import { Codesandbox } from 'react-feather';

class Title extends Component {
  render() {
    return <div className='TitleBar'>
      <span className='Title'>Joe Schaefer</span>
    </div>
  }
}

export default Title;