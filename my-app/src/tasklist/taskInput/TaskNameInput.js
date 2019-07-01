import React from 'react'
import TextField from '@material-ui/core/TextField'

export const TaskNameInput = (props) => {
    return <TextField
                autoComplete="off"
                variant="outlined"
                placeholder={props.placeholder}
                label={props.label}
                value={props.taskname}
                onChange={props.onChange}
                multiline={props.multiline}
            /> 
}