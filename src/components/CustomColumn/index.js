import React from 'react';
import { Col } from 'antd';
import 'antd/dist/antd.css';

const CustomColumn = ({ children = {}, size = 'full' }) => {
  if (size === 'half') {
    return (
      <Col xs={24} sm={16} md={12} lg={8} xl={8}>
        {children}
      </Col>
    );
  }

  return (
    <Col xs={12} sm={8} md={6} lg={4} xl={4}>
      {children}
    </Col>
  );
};
export default CustomColumn;
