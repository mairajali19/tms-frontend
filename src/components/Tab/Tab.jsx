import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, FormGroup, Label, Input, Row, Col, Button } from 'reactstrap';
import classnames from 'classnames';
import Modals from '../Modal/Modal'

import './tab.css';

const Tabs = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
  }

  return (
    <div>
      <Nav tabs className='mt-4'>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); }}
          >
            Properties
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Columns
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            Filters
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row form>
            <Col xs="3 mt-4">
            <FormGroup>
        <Label for="exampleEmail">Email</Label>
        <Input type="email" name="email" placeholder="with a placeholder" />
      </FormGroup>
            </Col>

            <Col xs="3 text-center mt-4">
            <FormGroup>
        <Label >Access Permission</Label>
        <br/>
        <Label check>
          <Input type="checkbox" />{' '}
          Public
        </Label>
        <p>Anyone can use the view</p>
      </FormGroup>
            </Col>

            <Col xs="3 text-center mt-4">
            <FormGroup>
        <Label >Access Permission</Label>
        <br/>
        <Label check>
          <Input type="checkbox" />{' '}
          Public
        </Label>
        <p>Anyone can use the view</p>
      </FormGroup>
            </Col>

            <Col xs="3 text-center mt-4">
            <FormGroup>
        <Label check>
          <Input type="checkbox" />{' '}
          Specific Persons
        </Label>
        <p>Only show to selected</p>
      </FormGroup>
            </Col>
          </Row>
        </TabPane>

        <TabPane  tabId="2">
          
             <button disabled className='ml-3 mt-4'> LoginID &#128473;	</button>
            
             <button disabled className='ml-3'> First Name &#128473;	</button>

             <button disabled className='ml-3'> Last Name &#128473;	</button>

             <button disabled className='ml-3'> Email &#128473;	</button>
          
        </TabPane>


        <TabPane  tabId="3">
            <div className='mt-4'>
            <Modals buttonLabel='New Filters' change-btn-color={true} modalHeader='Add Filter' search={true} />
            </div>

       
     </TabPane>
      </TabContent>
    </div>
  );
}

export default Tabs;