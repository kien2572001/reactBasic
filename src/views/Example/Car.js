import React from 'react';
import Child from './Child';

class Car extends React.Component{

    state = {
        firstName: '',
        lastName: '',
        carList: [
            {
                carName: 'Toyota',
                price: '100'
            },
            {
                carName: 'Lamborghini',
                price: '200'
            },
            {
                carName: 'Honda',
                price: '300'
            },
            {
                carName: 'Mercedes',
                price: '400'
            }
        ]
    }


    handleChangeFirstName = (e)=>{
        this.setState({
            firstName: e.target.value
        })
    }

    handleChangeLastName = (e)=>{
        this.setState({
            lastName: e.target.value
        })
    }

    handleOnClick = (e)=>{
        console.log(this.state)
    }

    render(){

        return (
            <React.Fragment>
                <div>Hello</div>
                <form>
                    <label htmlFor="fname">First name:</label><br/>
                    <input 
                        type="text" 
                        value={this.state.firstName} 
                        onChange={(e)=>this.handleChangeFirstName(e)}
                        /><br/>
                    <label htmlFor="lname">Last name:</label><br/>
                    <input 
                        type="text" 
                        value={this.state.lastName}
                        onChange={(e)=>this.handleChangeLastName(e)}
                        />
                    <br/>
                    <br/>
                    <input
                        type="button"
                        value="Submit"
                        onClick={(e)=>this.handleOnClick(e)}
                    />
                </form>
                <Child        
                    carList = {this.state.carList}
                />
            </React.Fragment>
            
        )
    }
}

export default Car;