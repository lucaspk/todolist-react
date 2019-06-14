import React from 'react'
import {PriorityInput} from '../taskPriority/PriorityInput'

export const TaskInput = (props) => {
    return <form onSubmit={props.onSubmitTask}>
              <label>
                <input id="task-input" type="text" 
                    placeholder={"Type your task here..."}
                    onChange={props.onChangeTaskName} 
                    value={props.taskname} 
                />
                <PriorityInput 
                    changeTaskPriority={props.onChangeTaskPriority}
                    value={props.priority}
                    priorityColor={props.priorityColor}
                />
              </label>
              <input variant="contained" color="primary" type="submit" value="Add" />
            </form>
  }