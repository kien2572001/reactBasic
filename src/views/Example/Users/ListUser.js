import React from 'react'
import axios from 'axios'
import { withRouter } from "react-router";


class ListUser extends React.Component{

    state = {
        listUsers: []
    }

    async componentDidMount(){
        let res = await axios.get('https://reqres.in/api/users?page=2')
        //console.log(res.data.data)
        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data: []
        })
    }

    handleOnClick = (id)=>{
        console.log(id)
        this.props.history.push(`users/${id}`)
    }

    render(){
        let arr = this.state.listUsers
        return (
            <>
                <div>List users</div>
                {
                arr.map((item)=>{
                    return (
                        <div className='user-container' onClick={()=>this.handleOnClick(item.id)} key={item.id}>
                            {item.id} - {item.first_name + ' ' +item.last_name } 
                        </div>
                    )
                })
                }
            </>
        )       
    }
}

export default withRouter(ListUser)