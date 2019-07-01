import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import TableCell from '@material-ui/core/TableCell';
import {Item} from './Item';
import {TaskListHeader} from './TaskListHeader';

const renderTableRows = (props) => {
    return props.list.map((task, index) => (
            <TableRow key={index}>
                <TableCell component="th" scope="row" id="cell">
                    <Item 
                        taskname={task.taskname}
                        priority={task.priority}
                        isChecked={task.isChecked}
                        description={task.description}
                        tags={task.tags}
                        subTasks={task.subTasks}
                        key={index}
                        bgcolor={task.color} 
                        removeTask={() => props.handleRemoveTask(task.taskname)} /> 
                </TableCell>
            </TableRow>
    ));
}

export const TaskTable = (props) => {
    return (
        <Paper id="paper">
            <Table>   
                <TableBody>
                    <TaskListHeader msg={props.msg} tasklistName={props.tasklistName} />
                    {renderTableRows(props)} 
                </TableBody>
            </Table>
        </Paper>
      );
}
