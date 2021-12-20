import React from 'react'
import { withRouter } from "react-router";
import { connect } from 'react-redux';
class Home extends React.Component{

    componentDidMount(){
        // setTimeout(()=>{
        //     this.props.history.push('/todo')
        // },3000)
    }

    handleDeleteUser = (user)=>{
        console.log(user)
        this.props.deleteUserRedux(user)
    }

    handleCreateUser = ()=>{
        this.props.createUserRedux()
    }

    render(){
        console.log('Props: ', this.props)
        let listUsers = this.props.dataRedux
        return (
            <div>
                Redux
                <button onClick={()=>this.handleCreateUser()}>Add user</button>
                {listUsers.map((item,index)=>{
                    return (
                        <div key={index}>
                            {index+1} {item.name}   <span onClick={()=>this.handleDeleteUser(item)}>X</span>
                        </div>  
                    )
                })}
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        dataRedux: state.users
    }
}

const mapDispatchToProps = (dispatch)=>{
    return {
        deleteUserRedux: (userDelete)=>dispatch({type: 'DELETE_USER',payload: userDelete }),
        createUserRedux: ()=>dispatch({type: 'CREATE_USER'})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Home)) 