import '../Common.css';
import './Menu.css';

import Dropdown from './Dropdown';

import React, { Component } from 'react';
import { CottageOutlined as CottageOutlinedIcon, CodeOutlined as CodeOutlinedIcon, InsertDriveFileOutlined as InsertDriveFileOutlinedIcon, LinkedIn as LinkedInIcon, GitHub as GitHubIcon, InfoOutlined as InfoOutlinedIcon } from '@mui/icons-material';
import { Linkedin, Codesandbox } from 'react-feather';

import { linkedinAddress, githubAddress } from '../../constant/addresses';

export interface SubMenuRow {
  rowTitle: string;
  rowIconName: string;
}

class Menu extends Component {
  render() {
    return (
      <div className="MenuParent Inset">
        <div className="MenuChild Page">
          Home.page<CottageOutlinedIcon fontSize="medium" className="MenuIcon" />
        </div>

        <div className="MenuChild Page">
          Projects.page<CodeOutlinedIcon fontSize="medium" className="MenuIcon" />
        </div>

        <Dropdown dropdownName="Demos" dropdownItems={[
          { rowTitle: "Numerical Methods.demo", rowIconName: "Demo" },
          { rowTitle: "Finite Element.demo", rowIconName: "Demo" },
        ]} />

        <div className="MenuChild Download">
          CV.pdf<InsertDriveFileOutlinedIcon fontSize='medium' className='MenuIcon' />
        </div>

        <a href={linkedinAddress}>
        <div className="MenuChild Link">
          Linkedin<LinkedInIcon fontSize='medium' className='MenuIcon' />
        </div>
        </a>

        <a href={githubAddress}>
        <div className="MenuChild Link">
            Github<GitHubIcon fontSize='medium' className='MenuIcon' />    
        </div>
        </a>

        <div className="MenuChild Info">
          Contact.info<InfoOutlinedIcon fontSize='medium' className='MenuIcon' />
        </div>
      </div>
    );
  }
}

export default Menu;
