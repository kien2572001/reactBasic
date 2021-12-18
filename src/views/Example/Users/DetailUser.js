import axios from "axios";
import React from "react";
import { withRouter } from "react-router";

class DetailUser extends React.Component{
    
    state = {
        user: {}
    }

    async componentDidMount(){
        if (this.props.match && this.props.match.params){
            let id = this.props.match.params.id
            let res  = await axios.get(`https://reqres.in/api/users/${id}`)
            //console.log(res.data.data)
            this.setState({
                user: res && res.data && res.data.data ? res.data.data : {}
            })
        }
    }

    render(){
        let {user} = this.state
        let isEmpty = Object.keys(user).length === 0
        //console.log(this.props.match.params.id)
        return (
            <>
            {
                isEmpty === false
                &&
                <>
                    <div>User detail</div>
                    <div><img src={user.avatar} /></div>
                    <div>
                        <span>Full name: {user.first_name} {user.last_name}</span>
                        <div>Email: {user.email}</div>
                    </div>
                </>
            }     
            </>
        )
    }
}

export default withRouter(DetailUser)