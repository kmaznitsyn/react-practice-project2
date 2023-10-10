import { Dialog, DialogContent, DialogTitle } from '@mui/material'
import React from 'react'

export default function ErrorModal(props) {
  return (
    <Dialog onClose={props.onClose} open={props.open}>
      <DialogTitle>
        Invalid input
      </DialogTitle>
      <DialogContent>
        {props.errorText}
      </DialogContent>
    </Dialog>
  )
}
