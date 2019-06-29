import React, {Component} from 'react'
import {TaskInput} from './taskInput/TaskInput'
import {Item} from './Item'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import FormHelperText from '@material-ui/core/FormHelperText';
import {TaskTodoInfo} from './TaskTodoInfo';

//no futuro ischecked pode voltar ao invés de remover []

class TaskList extends Component { 
  constructor(props) {
    super(props);

    this.state = {
      list: [{ //serve como exemplo de como deverá ser o objeto
        taskname: "Teste", 
        isChecked: false, 
        priority: "Low", 
        color: "gray",
        tags: ["Brincadeira"], 
        description: "Vamos brincar de adoletar",
        subTasks: ["Eu tou muito doido"]
      }],
      user: "Lucas",
      taskname: '',
      priority: "Low",
      tasklistName: "Tasklist Name",
    };

    this.handleChangeTaskPriority = this.handleChangeTaskPriority.bind(this);
    this.handleChangeTaskName = this.handleChangeTaskName.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRemoveTask = this.handleRemoveTask.bind(this);
  }

  handleAddTask() {
    if (this.state.taskname === '' || this.state.taskname === undefined) {
      alert("Tarefa vazia, bb!")
    }
    else {
      let newTaskObj = {
        taskname: this.state.taskname, 
        priority: this.state.priority,
        color: this.handleColorPriority()
      }
      this.setState({list: [...this.state.list, newTaskObj]})
    }
  }

  handleRemoveTask(taskname) {  
    let currTasks = this.state.list.filter(item => {return item.taskname !== taskname})
    this.setState({list: currTasks})
  }

  handleChangeTaskName(event) {
    this.setState({taskname: event.target.value})
  }

  handleChangeTaskPriority(event) {
    this.setState({priority: event.target.value})
  }

  handleSubmit(event) {
    this.handleAddTask()

    this.setState({taskname: ''}) // limpar input após submit
    
    //prevenir/cancelar evento antes que ele se propague
    //exemplo: ao tentar digitar numero em caixa de texto, ele n deixa 
    // e reclama que esta sendo digitado algo invalido 
    event.preventDefault()
  }

  handleColorPriority() {
    const PRIORITIES = ["Low", "Medium", "High"]
    const COLORS = ["gray", "orange", "red"]

    const idx = PRIORITIES.indexOf(this.state.priority)
    
    return COLORS[idx]
  }

  renderTaskInput() { 

    return <ul>
              <TaskInput
                onSubmitTask={this.handleSubmit}
                onChangeTaskName={this.handleChangeTaskName}
                taskname={this.state.taskname}
                onChangeTaskPriority={this.handleChangeTaskPriority}
                priority={this.state.priority}
                priorityColor={this.handleColorPriority}
              />
            </ul>
  }

  renderTableItem(task, index) {
    return (
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
                removeTask={() => this.handleRemoveTask(task.taskname)} /> 
            </TableCell>
      );
  }

  renderTaskListName() {
    return (
      <TableRow id="tasklistname-row">
        <TableCell component="th" scope="row" id="cell">
            <InputBase id="tasklist-name"
              defaultValue={this.state.tasklistName}
              inputProps={{ 'aria-label': 'naked' }}
              margin="normal"
            />
            <FormHelperText>You can change the tasklist name if you want. Just click on the name.</FormHelperText>
        </TableCell>
      </TableRow>
    );
  }

  renderTaskTable(list) {
    return (
      <Paper id="paper">
        <Table>   
          <TableBody>
            {this.renderTaskListName()}
            {list.map((task, index) => (
              <TableRow key={index}>
                {this.renderTableItem(task, index)}
              </TableRow>
            ))} 
          </TableBody>
        </Table>
      </Paper>
    );
  }

  renderTaskList() {
    const list = this.state.list
    console.log(list)
    return this.renderTaskTable(list)
  }

  renderTasksTodoMsg() {
    return <TaskTodoInfo len={this.state.list.length}/>
  }

  render() {
    return  <div>
              <h1>Task List for {this.state.user}</h1>
              {this.renderTasksTodoMsg()}
              {this.renderTaskInput()}
              {this.renderTaskList()}
            </div>
  }
}

export default TaskList