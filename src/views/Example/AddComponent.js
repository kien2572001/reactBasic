import React from 'react';

class AddComponent extends React.Component{

    state = {
        carName: '',
        salary: '',
    }

    handleChangeCarName = (e)=>{
        this.setState({
            carName: e.target.value
        })
    }

    handleChangeSalary = (e)=>{
        this.setState({
            salary: e.target.value
        })
    }

    handleOnClick = (e)=>{

        if (!this.state.carName || !this.state.salary){
            alert('Missing require params')
            return;
        }

        let id = Math.floor(Math.random() * 1000);
        this.props.addNewCar({
            id: id,
            carName: this.state.carName,
            price: this.state.salary
        })

        this.setState({
            carName: '',
            salary: ''
        })
    }

    render(){
        return (
            <form>
                    <label htmlFor="fname">Car name:</label><br/>
                    <input 
                        type="text" 
                        value={this.state.carName} 
                        onChange={(e)=>this.handleChangeCarName(e)}
                        /><br/>
                    <label htmlFor="lname">Last name:</label><br/>
                    <input 
                        type="text" 
                        value={this.state.salary}
                        onChange={(e)=>this.handleChangeSalary(e)}
                        />
                    <br/>
                    <br/>
                    <input
                        type="button"
                        value="Submit"
                        onClick={(e)=>this.handleOnClick(e)}
                    />
            </form>
        )
    }
}

export default AddComponent;