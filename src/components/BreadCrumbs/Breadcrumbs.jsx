import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import './breadcrumbs.css'
const Breadcrumbs = (props) => {
  return (
    <div>
      <div className='main1'>
      <Breadcrumb >
        <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
        <BreadcrumbItem active>{props.item}</BreadcrumbItem>
      </Breadcrumb>
      </div>
    </div>
  );
};

export default Breadcrumbs;