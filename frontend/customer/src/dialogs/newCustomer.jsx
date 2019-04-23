import React, { Component } from 'react'
import { List, ListItem, ListItemText, TextField, Dialog, DialogTitle, Button, DialogActions } from '@material-ui/core'; ''


export class NewCustomerDialog extends Component {
    render() {
        const {
            open,
            close
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
                                <TextField></TextField>
                            </ListItem>
                            <ListItem>
                                <ListItemText>
                                    Last Name:
                            </ListItemText>
                                <TextField></TextField>
                            </ListItem>
                            <ListItem>
                                <ListItemText>
                                    Address:
                             </ListItemText>
                                <TextField></TextField>
                            </ListItem>
                        </List>
                    </div>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleCreate} color="primary">
                            Confirm
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}