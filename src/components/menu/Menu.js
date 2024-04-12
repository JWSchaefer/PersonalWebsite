import '../Common.css'
import './Menu.css'

import Dropdown from './Dropdown';

import React, { Component } from 'react';

import { Linkedin } from 'react-feather';

import { Codesandbox } from 'react-feather';

import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';


class Menu extends Component {
  render() {
    return <div class="MenuParent Inset">
      <div class="MenuChild Page">
        Home.page<CottageOutlinedIcon fontSize="medum" className="MenuIcon"></CottageOutlinedIcon>
      </div>

      <div class="MenuChild Page">
      Projects.page<CodeOutlinedIcon fontSize="medum" className="MenuIcon"></CodeOutlinedIcon>
      </div>

      <Dropdown name="Demos" items={[
        ["Numerical Methods.demo","Demo"],
        ["Finite Element.demo","Demo"],
      ]} />

      <div class="MenuChild Download"> 
      CV.pdf<InsertDriveFileOutlinedIcon fontSize='medium' className='MenuIcon'></InsertDriveFileOutlinedIcon>
      </div>

      <div class="MenuChild Link"> 
      Linkedin.href<LinkedInIcon fontSize='medium' className='MenuIcon'></LinkedInIcon>
      </div>

      <div class="MenuChild Link"> 
      Github.href<GitHubIcon  fontSize='medium' className='MenuIcon'></GitHubIcon>
      </div>


      <div class="MenuChild Info">
        Contact.info<InfoOutlinedIcon fontSize='medium' className='MenuIcon'></InfoOutlinedIcon>
        </div>
    </div>
  }
}

export default Menu;