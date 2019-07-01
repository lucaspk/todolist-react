import React from 'react'
import InputBase from '@material-ui/core/InputBase';
import FormHelperText from '@material-ui/core/FormHelperText'
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

export const TaskListHeader = (props) => {
    return (
        <TableRow id="tasklistname-row">
          <TableCell component="th" scope="row" id="cell">
              <InputBase id="tasklist-name"
                defaultValue={props.tasklistName}
                inputProps={{ 'aria-label': 'naked' }}
              />
              <FormHelperText>{props.msg}</FormHelperText>
          </TableCell>
        </TableRow>
      );
}