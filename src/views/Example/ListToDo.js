import React from 'react'
import  '../Scss/ListToDo.scss'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Item from './Item';

class ListToDo extends React.Component{

    state = {
        listTasks: [{
            id: '1',
            content: 'Read book',
            isDone: false
        },
        {
            id: '2',
            content: 'Play game',
            isDone: false
        }],
        newTask: ''
    }

    addTask = ()=>{
        let id = Math.floor(Math.random()*1000)
        let tempTask = {
            id: id,
            content: this.state.newTask,
            isDone: false
        }
        this.setState({
            newTask: ''
        })
        let tempArr = [...this.state.listTasks,tempTask]
        this.setState({
            listTasks: tempArr
        })
        toast.success('Added a new task!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    removeTask = (id)=>{
        //console.log('Test')
        let arr = this.state.listTasks
        let tempARR = arr.filter(item => item.id!==id)
        this.setState({
            listTasks: tempARR
        })
    }

    inputOnChange = (e)=>{
        //console.log(e.target.value)
        this.setState({
            newTask: e.target.value
        })
    }

    updateTask = (id,content)=>{
        let arr = this.state.listTasks
        let stt = arr.findIndex(item => item.id === id )

        arr[stt].content = content
        toast.success('Updated a task!', {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            });
    }

    render(){
        let arr = this.state.listTasks
        return (
            <div className="container">
                <div className='wrapper'>
                    <h3 >ToDo List App</h3>
                    <input className={'input input_task'}
                        type="text"
                        placeholder='Enter task'
                        onChange={(e)=>this.inputOnChange(e)}
                        value={this.state.newTask}
                    />
                    <button 
                        className={this.state.newTask.length===0?'add-btn empty-input':'add-btn'} 
                        onClick={()=>{this.addTask()}}
                        disabled={this.state.newTask.length===0?true:false}
                    >Add To List</button>
                    <br/>
                    <input
                        className='input input_search'
                        type="text"
                        placeholder='Search your task...'
                    />
                    <br/>
                    <div className='list'>
                    {arr.map((item)=>{
                        return (
                            <Item 
                                removeTask = {this.removeTask}
                                key = {item.id}
                                item = {item}
                                updateTask = {this.updateTask}
                            />
                            )
                    })}
                    </div>
                    
                    <ToastContainer
                        position="top-right"
                        autoClose={4000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                </div>
            </div>
        )
    }
}

export default  ListToDo