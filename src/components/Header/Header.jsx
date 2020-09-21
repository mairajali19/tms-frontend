import React, { useState } from 'react';
import {
  Navbar, Container
} from 'reactstrap';
import CustomButton from '../CustomButton'
import { Row, Col } from 'antd';
import CustomColumn from '../CustomColumn'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Header = (props) => {

  return (
    <div>
      <Container fluid>
        < Row style={{ backgroundColor: '#CBD2E3' }} className="user-configuration-header-container " type="flex" justify="space-between" >
          <CustomColumn>
            <text className="user-configuration-header-label margin-left flex-one"><h1>User</h1>
            </text>
          </CustomColumn>
          <Col>
            <CustomButton className="margin-right">New</CustomButton>
          </Col>
        </Row >
      </Container>
      {/* <Navbar color="light" light expand="md"> */}

      {/* <button>U+1F6B9</button> */}
      {/* <FontAwesomeIcon icon={faCoffee} /> */}
      {/* <i class='fab fa-accessible-icon' style={{fontSize:'24px'}}> 	&#xf368;</i> */}

      {/* </Navbar> */}
    </div>
  );
}

export default Header;