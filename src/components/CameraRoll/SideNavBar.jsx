import React from 'react';
import './SideNavBar.css';

function SideNavBar() {
  return (
    <>
      <div className= "sidenavbar">
        <a className="nav-link active " aria-current="page" href="/#">2021</a>
        <a className="nav-link " href="/#">- April</a>
        <a className="nav-link text-secondary" href="/#">- January</a>
      </div>
    </>
  );
}

export default SideNavBar;
