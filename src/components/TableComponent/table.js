import React from 'react'
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button, Row, Col } from "reactstrap";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator"
import './table.css'
import { DownloadImage } from '../../assets/download.png';
import Modals from './modal'
const { SearchBar } = Search;

const columns = [
    {
        dataField: "loginid",
        text: "Login ID",
        sort: true,
        headerStyle: () => {
            return { width: "5%" };
        },
    },
    {
        dataField: "firstname",
        text: "Firstname",
        sort: true,
    },
    {
        dataField: "lastname",
        text: "Lastname",
        sort: true,
    },
    {
        dataField: "email",
        text: "Email",
        sort: true,
    }
]

const defaultSorted = [
    {
        dataField: "loginid",
        order: "asc",
    },
];

const options = {
    sizePerPageList: [{
        text: '5', value: 5
    }, {
        text: '10', value: 10
    }, {
        text: '15', value: 15
    }, {
        text: '20', value: 20
    }]
}

const TableComponent = (props) => {
    return (
        <Container>
            <ToolkitProvider
                bootstrap4
                keyField="loginid"
                data={props.users}
                columns={columns}
                defaultSorted={defaultSorted}
                search
            >
                {
                    (props) => (
                        <div>
                            {/* <div className="div-icon"> */}
                            {/* <img src={DownloadImage}  className='download-icon'/> */}
                            {/* </div> */}
                            <Modals buttonLabel='exp' table={<BootstrapTable {...props.baseProps} />} change-btn-color={true} modalHeader='Add Filter' search={true} />
                            <div className="float-right">
                                <SearchBar {...props.searchProps} placeholder="Search .." />
                            </div>
                            <BootstrapTable {...props.baseProps} pagination={paginationFactory(options)} />
                        </div>
                    )
                }
            </ToolkitProvider>
        </Container>
    )
}

export default TableComponent