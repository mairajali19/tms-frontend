import React from 'react';
import { Button } from 'antd';
import 'antd/dist/antd.css';

const CustomButton = (
  {
    children = {},
    icon = null,
    size = 'small',
    style = {},
    className,
    onClick=null,
    type = '',
    textClass = '',
    disabled = false,
  },
) => (
  <Button
    type={type || 'primary'}
    icon={icon || null}
    size={size}
    style={style}
    className={className}
    onClick={onClick}
    disabled={disabled}
  >
    {children}
  </Button>
);

export default CustomButton;
