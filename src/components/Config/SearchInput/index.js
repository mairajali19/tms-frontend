import React from 'react';
import { Input } from 'antd';
import 'antd/dist/antd.css';
import './style.scss'

const { Search } = Input;
const SearchInput = (
  {
    onSearch = function () {},
    onChange = function () {},
    placeholder,
    className = 'search-input-style',
    size = 'default',
  },
) => (
  <Search
    placeholder={placeholder}
    onSearch={onSearch}
    onChange={onChange}
    className={className}
    size={size}
  />

);
export default SearchInput;
