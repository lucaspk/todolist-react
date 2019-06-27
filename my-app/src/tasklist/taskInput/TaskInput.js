import React from 'react'
import {PriorityInput} from '../taskPriority/PriorityInput'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  item: {
    flex: 0.2,  
  }
}));
//acho que isso no formato de tabela tb eh melhor
export const TaskInput = (props) => {
  const classes = useStyles();
  return <form onSubmit={props.onSubmitTask} >
                <FormControl className={classes.root}>
                  <div className={classes.item}> 
                    <TextField
                      autoComplete="off"
                      variant="outlined"
                      placeholder="Type your task here..."
                      label="Task Name"
                      value={props.taskname}
                      onChange={props.onChangeTaskName}
                      margin="normal"
                      multiline={true}
                    /> 
                  </div >
                  <div className={classes.item}> 
                    <PriorityInput 
                        changeTaskPriority={props.onChangeTaskPriority}
                        value={props.priority}
                        priorityColor={props.priorityColor}
                    />
                  </div>
                  <div className={classes.item}>
                    <Button variant="contained" id="add-button" type="submit">
                      Add
                    </Button>
                  </div>
                </FormControl>
            </form>
  }