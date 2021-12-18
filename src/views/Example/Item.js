import React from 'react'
import '../Scss/ListToDo.scss'

class Item extends React.Component{

    state = {
        checkEditing: false,
        content: ''
    }

    removeTask = (key)=>{
        this.props.removeTask(key)
    }

    handleEditTask =  (id,content)=>{
        if (this.state.checkEditing===true){
            this.setState({
                checkEditing: false
            })
            this.props.updateTask(id,content)
        }
        else{
            this.setState({
                checkEditing: true,
                content: this.props.item.content
            })
        }
        
    }

    onChangeInput = (e)=>{
        this.setState({
            content: e.target.value
        })
    }

    render(){
        return (
            <>
                <div className="item">
                    <input type="checkbox" className='checkbox-input'/>
                    <span>
                        {this.state.checkEditing===true
                            ?
                            <input className='' type='text' value={this.state.content} onChange={(e)=>this.onChangeInput(e)}></input>
                            :
                            this.props.item.content
                        } 
                    </span>
                    
                    <button className='remove-btn'
                        onClick={()=>this.removeTask(this.props.item.id)}
                    >Remove</button>
                    <button className='remove-btn space-btn'
                        onClick={()=>this.handleEditTask(this.props.item.id,this.state.content)}
                    >{this.state.checkEditing===true  ?   'Save'  :  'Edit'}</button>
                </div>
            </>
        )
    }
}

export default  Item