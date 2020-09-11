import React from 'react'
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button, Row, Col } from "reactstrap";
import ToolkitProvider, {Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator"

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
                            <div className="float-right">
                                <SearchBar {...props.searchProps} placeholder="Search .." />
                            </div>
                            <BootstrapTable {...props.baseProps} pagination={paginationFactory()} />
                        </div>
                    )
                }
            </ToolkitProvider>
        </Container>
    )
}

export default TableComponent