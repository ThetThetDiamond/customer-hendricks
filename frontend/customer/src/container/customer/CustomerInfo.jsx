import React, { Component } from 'react'
import { Paper, Table, TableBody, TableCell, TableHead, TableRow, Button } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { NewCustomerDialog } from '../dialogs/newCustomer'
import { DeleteCustomerDialog } from '../dialogs/deleteCustomer'

export class CustomerComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            newCustomerResult: [],
            openCreate: false,
            openDelete: false,
            deletedId: ''
        }
    }

    componentDidMount() {
        this.getAllCustomers()
    }

    getAllCustomers = async () => {
        let result = await fetch(`/customers`)
        result = await result.json()
        if (result) {
            this.setState({ items: result })
        }
    }

    createCustomer = async (newCustomerData) => {
        let addCustomer = newCustomerData
        let result = await fetch(`/create?firstName= ${addCustomer.firstName}&lastName=${addCustomer.lastName}&address=${addCustomer.address}`)
        result = await result.json()
        if (result) {
            let customers = this.state.items
            customers.push(result)
        }
        this.setState({ openCreate: false })
    }

    deletedCustomer = async () => {
        let id = this.state.deletedId
        await fetch(`/delete?id= ${id}`)
        this.setState({ openDelete: false })
        this.getAllCustomers()
    }

    addNewCustomer = () => {
        this.setState({ openCreate: true });
    }

    deleteCustomer = id => () => {
        this.setState({ openDelete: true })
        this.setState({ deletedId: id })
    }

    handleClose = () => {
        this.setState({ openCreate: false })
        this.setState({ openDelete: false })
    }

    render() {

        const { openCreate, openDelete, items, deletedId } = this.state
        return (
            <div>
                <Paper>
                    <Button

                        variant="contained" color='primary' onClick={this.addNewCustomer}>Add New Customer</Button>

                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell >Name</TableCell>
                                <TableCell >Address</TableCell>
                                <TableCell></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {items.map(row => (
                                <TableRow key={row.id}>
                                    <TableCell >
                                        {row.id}
                                    </TableCell>
                                    <TableCell >{row.firstName + row.lastName}</TableCell>
                                    <TableCell >{row.address}</TableCell>
                                    <TableCell>
                                        <Button color='secondary'>
                                            <DeleteIcon onClick={this.deleteCustomer(row.id)} />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <NewCustomerDialog
                        open={openCreate}
                        close={this.handleClose}
                        createCustomer={this.createCustomer}
                    />
                    <DeleteCustomerDialog
                        open={openDelete}
                        close={this.handleClose}
                        deletedId={deletedId}
                        deletedCustomer={this.deletedCustomer} />
                </Paper>

            </div>
        )
    }
}