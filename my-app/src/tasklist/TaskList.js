import React, {Component} from 'react'
import {TaskInput} from './taskInput/TaskInput'
import {Item} from './Item'
import List from '@material-ui/core/List'

//task item terá prioridade, tags etc
//no futuro ischecked pode voltar ao invés de remover []
//tem que permitir editar

class TaskList extends Component { 
  constructor(props) {
    super(props);

    this.state = {
      list: [{ //serve como exemplo de como deverá ser o objeto
        taskname: "Teste", 
        isChecked: false, 
        priority: "Low", //3 níveis Low(gray), medium(orange) e high(red)
        color: "gray",
        tags: ["Brincadeira"], 
        description: "Vamos brincar de adoletar",
        subTasks: ["Eu tou muito doido"]
      }],
      user: "Lucas",
      taskname: '',
      priority: "Low",
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

  createTaskInput() { //acho melhor transformar em um function component dps passando Tasklist

    return <TaskInput
              onSubmitTask={this.handleSubmit}
              onChangeTaskName={this.handleChangeTaskName}
              taskname={this.state.taskname}
              onChangeTaskPriority={this.handleChangeTaskPriority}
              priority={this.state.priority}
              priorityColor={this.handleColorPriority}
            />
  }

  //criar tasks a partir da lista
  renderTasks() {
    const list = this.state.list
    console.log(list)
    return (
      <List>
        {list.map((task, index) => (
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
        ))}        
      </List>
    );
  }

  renderTaskList() {
    return <ul> {this.renderTasks()} </ul>
  }

  render() {
    return <div className="task-list">
            <h1>Task List for {this.state.user}</h1>
            {this.createTaskInput()}
            {this.renderTaskList()}
          </div>
  }
}

export default TaskList