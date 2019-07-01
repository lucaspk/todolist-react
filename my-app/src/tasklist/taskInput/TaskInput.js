import React from 'react'
import Button from '@material-ui/core/Button'
import FormControl from '@material-ui/core/FormControl'
import { makeStyles } from '@material-ui/core/styles'
import { TaskNameInput } from './TaskNameInput';
import {PrioritySelect} from '../taskPriority/PrioritySelect';

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
  const PRIORITIES = ["Low", "Medium", "High"]
  const COLORS = ["gray", "orange", "red"]
  return  <PrioritySelect 
            onChange={props.onChangeTaskPriority} 
            priority={props.priority}
            PRIORITIES={PRIORITIES}
            COLORS={COLORS}
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