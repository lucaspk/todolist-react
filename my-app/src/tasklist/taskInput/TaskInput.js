import React from 'react'
import {PriorityInput} from '../taskPriority/PriorityInput'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    //flexWrap: 'nowrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export const TaskInput = (props) => {
  const classes = useStyles();
    return <form className={classes.root} onSubmit={props.onSubmitTask}>
                <FormControl className={classes.root}>
                  <TextField
                    autoComplete="off"
                    variant="outlined"
                    placeholder="Type your task here..."
                    id="task-name"
                    label="Task Name"
                    value={props.taskname}
                    onChange={props.onChangeTaskName}
                    margin="normal"
                    multiline={true}
                  />
                  <PriorityInput 
                      changeTaskPriority={props.onChangeTaskPriority}
                      value={props.priority}
                      priorityColor={props.priorityColor}
                  />
                  <Button variant="contained" type="submit">
                    Add
                  </Button>
                </FormControl>
            </form>
  }