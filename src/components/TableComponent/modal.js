import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Table } from 'reactstrap';
import './modal.css'
import Search from './Search';
import { CSVLink } from 'react-csv'

const Modals = (props) => {
    const {
        buttonLabel,
        className
    } = props;

    const [modal, setModal] = useState(false);
    const [table, setTable] = useState(null)
    const toggle = () => setModal(!modal);

    const apply = () => {
        if (table == 'excel') {
            const csvData = props.table.props.data
            const fileName = 'Users'
            console.log(csvData, fileName)
            return <CSVLink data={csvData} filename={fileName} />
        }
    }
    // console.log(props.table.props.data)
    const csvData = props.table.props.data
    let button;
    if (table == 'excel') {
        button = <button><CSVLink data={csvData}>Apply</CSVLink></button>
    }
    return (
        <div>
            <Button color="danger" onClick={toggle} className='change-btn-color'>{buttonLabel}</Button>
            <Modal isOpen={modal} toggle={toggle} className={className}>
                <div className='header'>
                    <ModalHeader toggle={toggle} > {props.modalHeader}  {props.search}
                        <Search className='search' />
                    </ModalHeader>
                </div>
                <ModalBody>
                    Choose an export format for report
                    <p>
                        <input type='checkbox' onChange={() => setTable('excel')} />&nbsp;&nbsp;&nbsp;Excel (.xlx)
                    </p>
                    <p>
                        <input type='checkbox' onChange={() => setTable('csv')} />&nbsp;&nbsp;&nbsp;CSV (.csv)
                    </p>
                    <p>
                        <input type='checkbox' onChange={() => setTable('xml')} />&nbsp;&nbsp;&nbsp;XML (.xml)
                    </p>
                    <p>
                        <input type='checkbox' onChange={() => setTable('pdf')} />&nbsp;&nbsp;&nbsp;PDF (.pdf)
                    </p>
                </ModalBody>
                <ModalFooter>
                    {
                        button
                    }
                    {/* <button><CSVLink data={csvData}>Apply</CSVLink></button> */}
                </ModalFooter>
            </Modal>
        </div >
    );
}

export default Modals;