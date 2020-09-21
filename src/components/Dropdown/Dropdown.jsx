import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Container, Button } from 'reactstrap';
import './dropdown.css'
import { Row, Col } from 'antd';
import CustomColumn from '../CustomColumn'
import CustomButton from '../CustomButton'
import Tabs from '../Tab/Tab'
const Dropdowns = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropToggle = () => setDropdownOpen(prevState => !prevState);
  const [toggle, setToggle] = useState(true)

  const collapseToggle = () => {
    setToggle(!toggle)
  }

  return (
    <div>
      {
        toggle ?
          // <Container fluid>
          //   < Row style={{ backgroundColor: '#CBD2E3' }} className="user-configuration-header-container " type="flex" justify="space-between">
          //     <Dropdown isOpen={dropdownOpen} toggle={dropToggle}>
          //       <DropdownToggle caret className='btn'>
          //         View
          //       </DropdownToggle>
          //       <DropdownMenu>
          //         <DropdownItem header>View1</DropdownItem>
          //         <DropdownItem>View2</DropdownItem>
          //         <DropdownItem >View3</DropdownItem>
          //       </DropdownMenu>
          //     </Dropdown>
          //     <CustomColumn>
          //       <button  style={{ border: 'none' }} onClick={collapseToggle}>Configuration</button>
          //     </CustomColumn>
          //   </Row >
          // </Container > 
          <Container fluid>
            <div className='main'>
              {/* <div className='drop'> */}
              <Dropdown isOpen={dropdownOpen} toggle={dropToggle}>
                <DropdownToggle caret className='btn'>
                  View
              </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem header>View1</DropdownItem>
                  <DropdownItem>View2</DropdownItem>
                  <DropdownItem >View3</DropdownItem>

                </DropdownMenu>
              </Dropdown>
              {/* </div> */}

              {/* <div className='confi-btn'> */}
              <button onClick={collapseToggle}>Configuration</button>
              {/* </div> */}
            </div>
          </Container>
          :
          // <div>
          <Container fluid>
            < Row style={{ backgroundColor: '#CBD2E3' }} className="user-configuration-header-container " type="flex" justify="space-between" >
              <CustomColumn>
                <text className="user-configuration-header-label margin-left flex-one">{` `}</text>
              </CustomColumn>
              <Col>
                <CustomButton className="margin-right">Copy</CustomButton>&nbsp;&nbsp;
               <CustomButton className="margin-right">Apply</CustomButton>&nbsp;&nbsp;
               <CustomButton className="margin-right" style={{ backgroundColor: 'red', color: 'white' }} onClick={collapseToggle}>Close</CustomButton>
              </Col>
            </Row >
            <Tabs />
          </Container >
      }
    </div>
  );
}
// </div>

{/* <CustomColumn>
          <text className="user-configuration-header-label margin-left flex-one">Configuration</text>
        </CustomColumn>
        <Col>
          <CustomButton className="margin-right">Save</CustomButton>&nbsp;&nbsp;
          <CustomButton className="margin-right">Apply</CustomButton>
        </Col> */}

// <Container fluid>
//   <div className='main'>
//     {/* <div className='drop'> */}
//     <Dropdown isOpen={dropdownOpen} toggle={dropToggle}>
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


export default Dropdowns;