import React, {Component} from 'react'
import {TaskInput} from './taskInput/TaskInput'
import {TaskTodoInfo} from './TaskTodoInfo';
import { TaskTable } from './TaskTable';

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

    event.preventDefault()
  }

  handleColorPriority() {
    const PRIORITIES = ["Low", "Medium", "High"]
    const COLORS = ["gray", "orange", "red"]

    const idx = PRIORITIES.indexOf(this.state.priority)
    
    return COLORS[idx]
  }

  renderTaskInput() { 
    return  <ul>
              <TaskInput
                onSubmitTask={this.handleSubmit}
                onChangeTaskName={this.handleChangeTaskName}
                taskname={this.state.taskname}
                onChangeTaskPriority={this.handleChangeTaskPriority}
                priority={this.state.priority}
              />
            </ul>
  }

  renderTaskTable(list) {
    const helperTxt = "You can change the tasklist name if you want. Just click on the name."
    
    return <TaskTable msg={helperTxt} list={list}
              tasklistName={this.state.tasklistName}
              handleRemoveTask={this.handleRemoveTask}
              />
  }

  renderTasksTodoMsg() {
    return <TaskTodoInfo len={this.state.list.length}/>
  }

  render() {
    const tasks = this.state.list
    return  <div>
              <h1>Task List for {this.state.user}</h1>
              {this.renderTasksTodoMsg()}
              {this.renderTaskInput()}
              {this.renderTaskTable(tasks)}
            </div>
  }
}

export default TaskList