import React, { useState } from 'react';
import {
  Navbar
} from 'reactstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Header = (props) => {

  return (
    <div>
      <Navbar color="light" light expand="md">

        <button>U+1F6B9</button>
      {/* <FontAwesomeIcon icon={faCoffee} /> */}
      {/* <i class='fab fa-accessible-icon' style={{fontSize:'24px'}}> 	&#xf368;</i> */}
       
      </Navbar>
    </div>
  );
}

export default Header;