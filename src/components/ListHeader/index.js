import React from 'react';
import 'antd/dist/antd.css';
import './style.scss';
import {
  Col, Row, Select,
} from 'antd';
// import debounce from 'lodash.debounce';
import SearchInput from '../SearchInput'
import CustomPagination from '../CustomPagination'
// import { SearchInput, c } from '../index';
import DownloadImage from '../../assets/download.png';

const { Option } = Select;
const ListHeader = (
  // {
  //   store = null,
  //   onCountChange = function () {},
  //   onPageChange = function () {},
  //   onDownload = function () {},
  //   onSearch = function () {},
  //   // currentPage = 1,
  //   count = 5,
  // },
) => {
  const pages = [
    <Option key="5">5</Option>,
    <Option key="10">10</Option>,
    <Option key="15">15</Option>,
  ];
  // function onChange(event) {
  //   count = parseInt(event);
  //   onCountChange(count);
  // }
  return (
    <Row type="flex" className="listPage-header margin-top" style={{background:'#ECEFF5'}}>
      <Col span={8}>
        <Row className="align-items margin-left" type="flex">
          <text className="poppinsLight poppins-light-16">Show Entries</text>
          <Select
            className="select-option poppinsLight poppins-light-16"
            // onChange={(event) => { onChange(event); }}
            defaultValue="5"
            // value={count}
            size="small"
          >
            {pages}
          </Select>
          <div className="div-icon">
            <img src={DownloadImage} className="download-icon cursor" />
          </div>
        </Row>
      </Col>
      <Col span={8}>
        <Row justify="center" type="flex">
          <CustomPagination
            // total={store ? store.length : 0}
            //                   // current={currentPage}
            // pageSize={count}
            // onChange={onPageChange}
          />
        </Row>
      </Col>
      <Col span={8}>
        <Row justify="end" type="flex" className="margin-right">
          <SearchInput
            className="search-user poppinsLight"
            placeholder="Search"
            // onChange={(event) => onSearch(event.target.value)}
            size="small"
          />
        </Row>
      </Col>
    </Row>
  );
};

export default ListHeader;
