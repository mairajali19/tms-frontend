import React from 'react';
import { Pagination } from 'antd';
import 'antd/dist/antd.css';
import './style.scss';

const CustomPagination = (
  {
    total = 120,
    pageSize = 5,
    // current=1,
    defaultCurrent = 1,
    showTotal = 10,
    disabled = false,
    hideOnSinglePage = true,
    onChange = null,
    showQuickJumper = null,
    size = 'small',
    showLessItems = true,
  },
) => (
  <Pagination
    // current={current}
    total={total}
    // showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
    pageSize={pageSize}
    defaultCurrent={defaultCurrent}
    hideOnSinglePage={hideOnSinglePage}
    onChange={onChange}
    showQuickJumper={showQuickJumper}
    disabled={disabled}
    size={size}
    showLessItems={showLessItems}
  />
);
export default CustomPagination;
