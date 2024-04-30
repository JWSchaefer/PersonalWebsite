import React, { useState } from 'react';
import '../Common.css';
import './Menu.css';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import ArrowForwardIosOutlinedIcon from '@mui/icons-material/ArrowForwardIosOutlined';
import MenuOutlinedIcon from '@mui/icons-material/MenuOutlined';

import { SubMenuRow } from './Menu';

interface DynamicIconProps {
  dynamicIconName: string;
}

interface DropdownProps {
  dropdownName: string;
  dropdownItems: Array<SubMenuRow>;
}

function DynamicIcon({ dynamicIconName }: DynamicIconProps) {
  switch (dynamicIconName) {
    case 'Demo':
      return <TerminalOutlinedIcon className='MenuIcon' />;
    default:
      return null; // or any default component
  }
}

function DynamicRow({ rowTitle, rowIconName }: SubMenuRow) {
  return (
    <div className={`DropDownChild MenuChild ${rowIconName}`}>
      {rowTitle} <DynamicIcon dynamicIconName={rowIconName} />
    </div>
  );
}

function Dropdown({ dropdownName, dropdownItems }: DropdownProps) {
  const [expanded, setExpanded] = useState(true);

  const onClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className="MenuChild Dir" onClick={onClick}>
        <ArrowForwardIosOutlinedIcon
          fontSize='small'
          style={{ transform: expanded ? '' : 'rotate(90deg)', transition: 'transform 200ms ease' }}
        />
        &thinsp;{dropdownName}
        <MenuOutlinedIcon fontSize='medium' className='MenuIcon' />
      </div>
      {expanded ? null : dropdownItems.map((dropdownItem) => DynamicRow(dropdownItem))}
    </>
  );
}

export default Dropdown;
