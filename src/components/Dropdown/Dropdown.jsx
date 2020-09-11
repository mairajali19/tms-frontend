import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Container, Button } from 'reactstrap';
import './dropdown.css'
import { Row, Col } from 'antd';
import CustomColumn from '../CustomColumn'
import CustomButton from '../CustomButton'
const Dropdowns = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setDropdownOpen(prevState => !prevState);

  return (
    <Container fluid>
      <Row className="user-configuration-header-container " type="flex" justify="space-between">
        <CustomColumn>
          <text className="user-configuration-header-label margin-left flex-one">Configuration</text>
        </CustomColumn>
        <Col>
          <CustomButton className="margin-right">Save</CustomButton>&nbsp;&nbsp;
          <CustomButton className="margin-right">Apply</CustomButton>
        </Col>
      </Row>
    </Container>
    // <Container fluid>
    //   <div className='main'>
    //     {/* <div className='drop'> */}
    //     <Dropdown isOpen={dropdownOpen} toggle={toggle}>
    //       <DropdownToggle caret className='btn'>
    //         View
    //     </DropdownToggle>
    //       <DropdownMenu>
    //         <DropdownItem header>View1</DropdownItem>
    //         <DropdownItem>View2</DropdownItem>
    //         <DropdownItem >View3</DropdownItem>

    //       </DropdownMenu>
    //     </Dropdown>
    //     {/* </div> */}

    //     {/* <div className='confi-btn'> */}
    //     <button>Configuration</button>
    //     {/* </div> */}
    //   </div>
    // </Container>
  );
}

export default Dropdowns;