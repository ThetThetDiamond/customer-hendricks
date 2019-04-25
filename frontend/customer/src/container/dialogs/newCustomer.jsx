import React, { Component } from 'react'
import { List, ListItem, ListItemText, Dialog, DialogTitle, Button, DialogActions, Input } from '@material-ui/core';


export class NewCustomerDialog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newCustomerData: {
                firstName: '',
                lastName: '',
                address: ''
            },
        }
    }

    createCustomer = () => {
        let newCustomer = this.state.newCustomerData
        this.props.createCustomer(newCustomer);
    }

    render() {
        const {
            open,
            close,
        } = this.props
        return (
            <div>
                <Dialog
                    open={open}
                    onClose={close}>
                    <DialogTitle >Create Customer</DialogTitle>
                    <div>
                        <List>
                            <ListItem>
                                <ListItemText>
                                    First Name:
                            </ListItemText>
                                <Input id='fName' value={this.state.newCustomerData.firstName}
                                    onChange={(e) => {
                                        let { newCustomerData } = this.state;
                                        newCustomerData.firstName = e.target.value;
                                        this.setState({ newCustomerData })
                                    }} />
                            </ListItem>
                            <ListItem>
                                <ListItemText>
                                    Last Name:
                            </ListItemText>
                                <Input id='lName' value={this.state.newCustomerData.lastName}
                                    onChange={(e) => {
                                        let { newCustomerData } = this.state;
                                        newCustomerData.lastName = e.target.value;
                                        this.setState({ newCustomerData })
                                    }} />
                            </ListItem>
                            <ListItem>
                                <ListItemText>
                                    Address:
                             </ListItemText>
                                <Input id='add' value={this.state.newCustomerData.address}
                                    onChange={(e) => {
                                        let { newCustomerData } = this.state;
                                        newCustomerData.address = e.target.value;
                                        this.setState({ newCustomerData })
                                    }} />
                            </ListItem>
                        </List>
                    </div>
                    <DialogActions>
                        <Button onClick={close} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.createCustomer} color="primary">
                            Create
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}