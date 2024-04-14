import '../Common.css'
import './Menu.css'

import React, {useState } from 'react';

import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

function Icon(type){
  switch(type){
    
    case "Demo":
      return <TerminalOutlinedIcon className='MenuIcon'></TerminalOutlinedIcon>

    default:
      return
  }
}




function Item(item) {
  return (
    <div className={"  DropDownChild MenuChild " + item[1]} >
     {item[0]} {Icon(item[1])}
    </div>
  );
}

function Dropdown({name, items}) {

  const [expanded, setExpanded] = useState(true);

  const onClick = () => {
    setExpanded(!expanded);
  };

  return <div>
    <div className="MenuChild Dir " onClick={onClick}>
      <ArrowForwardIosOutlinedIcon fontSize='small' style={{transform: expanded ? '' : 'rotate(90deg)', transition: 'transform 200ms ease'}}></ArrowForwardIosOutlinedIcon>
      &thinsp;{name}
      <MenuOutlinedIcon fontSize='small' className='MenuIcon'>
      </MenuOutlinedIcon>
    </div>
    {expanded ? null : items.map((item) => Item(item))}
  </div>
    
}


export default Dropdown;