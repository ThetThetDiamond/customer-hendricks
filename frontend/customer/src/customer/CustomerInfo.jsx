import React, { Component } from 'react'
import { Table, TableBody, TableCell, TableHead, TableRow, Button } from '@material-ui/core'; ''
import { NewCustomerDialog } from '../dialogs/newCustomer'
import { DeleteCustomerDialog } from '../dialogs/deleteCustomer'

export class CustomerComponent extends Component {

    state = {
        openCreate: false,
        openDelete: false,
        close: true
    }
    addNewCustomer = () => {

    }

    deleteCustomer = () => {

    }
    render() {
        const {


        } = this.props
        const { openCreate, openDelete, close } = this.state
        return (
            <div>
                <Button onClick={addNewCustomer()}>Add New Customer</Button>
                <Button conClick={deleteCustomer()}>Delete Customer</Button>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell >Name</TableCell>
                            <TableCell >Address</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map(row => (
                            <TableRow key={row.id}>
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.name}</TableCell>
                                <TableCell align="right">{row.address}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <NewCustomerDialog
                    open={openCreate}
                    close={close} />
                <DeleteCustomerDialog
                    open={openDelete}
                    close={close} />
            </div>
        )
    }
}