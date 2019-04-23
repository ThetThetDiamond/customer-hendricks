import React, { Component } from 'react'
import { Dialog, DialogTitle, DialogContent, Button, DialogActions } from '@material-ui/core'; ''


export class DeleteCustomerDialog extends Component {
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
                    <DialogTitle >Delete Customer</DialogTitle>
                    <DialogContent>
                        Are you sure to delete the Custmer?
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={close} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.handleCreate} color="primary">
                            Delete
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        )
    }
}