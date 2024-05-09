import "./Menu.css";

import Dropdown from "./Dropdown";

import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  CottageOutlined as CottageOutlinedIcon,
  CodeOutlined as CodeOutlinedIcon,
  InsertDriveFileOutlined as InsertDriveFileOutlinedIcon,
  LinkedIn as LinkedInIcon,
  GitHub as GitHubIcon,
  InfoOutlined as InfoOutlinedIcon,
  LocalPhoneOutlined,
} from "@mui/icons-material";

import { Linkedin, Codesandbox } from "react-feather";

import { linkedinAddress, githubAddress } from "../../constant/addresses";

export interface SubMenuRow {
  rowTitle: string;
  rowIconName: string;
}

const IconFontSize: string = "small";

class Menu extends Component {
  render() {
    return (
      <div className="MenuParent Inset">
        <Link to="/">
          <div className="MenuChild Page">
            Home.page
            <CottageOutlinedIcon fontSize="small" className="MenuIcon" />
          </div>
        </Link>

        <Link to="/about">
          <div className="MenuChild About">
            About.me
            <InfoOutlinedIcon fontSize="small" className="MenuIcon" />
          </div>
        </Link>

        <Dropdown
          dropdownName="Demos"
          dropdownItems={[
            { rowTitle: "NM.demo", rowIconName: "Demo" },
            { rowTitle: "FE.demo", rowIconName: "Demo" },
          ]}
        />

        <div className="MenuChild Download">
          CV.pdf
          <InsertDriveFileOutlinedIcon fontSize="small" className="MenuIcon" />
        </div>

        <a href={linkedinAddress}>
          <div className="MenuChild Link">
            Linkedin
            <LinkedInIcon fontSize="small" className="MenuIcon" />
          </div>
        </a>

        <a href={githubAddress}>
          <div className="MenuChild Link">
            Github
            <GitHubIcon fontSize="small" className="MenuIcon" />
          </div>
        </a>
      </div>
    );
  }
}

export default Menu;
