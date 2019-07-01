import React from 'react'
import {PriorityInput} from '../taskPriority/PriorityInput'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import { makeStyles } from '@material-ui/core/styles'
import { TaskNameInput } from './TaskNameInput';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    flex: 0.2,  
  }
}));

const renderTaskNameInput = (props) => {
  return <TaskNameInput 
            placeholder={"Type your task here..."}
            label={"Task Name"}
            taskname={props.taskname}
            onChange={props.onChangeTaskName}
            multiline={true}
          /> 
}

const renderPriorityInput = (props) => {
  return  <PriorityInput 
            changeTaskPriority={props.onChangeTaskPriority}
            priority={props.priority}
          />
}

const renderAddButton = () => {
  return  <Button variant="contained" id="add-button" type="submit">
            Add
          </Button>
}

//acho que isso no formato de tabela tb eh melhor
export const TaskInput = (props) => {
  const classes = useStyles();
  return  <form onSubmit={props.onSubmitTask} >
            <FormControl className={classes.root}>
              <div className={classes.item}> 
                {renderTaskNameInput(props)} 
              </div >
              <div className={classes.item}> 
                {renderPriorityInput(props)}
              </div>
              <div className={classes.item}>
                {renderAddButton()}
              </div>
            </FormControl>
          </form>
  }