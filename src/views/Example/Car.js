import React from 'react';
import Child from './Child';
import AddComponent from './AddComponent';

class Car extends React.Component{

    state = {        
        carList: [
            {
                id: '1',
                carName: 'Toyota',
                price: '100'
            },
            {
                id: '2',
                carName: 'Lamborghini',
                price: '200'
            },
            {
                id: '3',
                carName: 'Honda',
                price: '300'
            },
            {
                id: '4',
                carName: 'Mercedes',
                price: '400'
            }
        ]
    }


    addNewCar = (newCar)=>{
        console.log('add a new car')
        let list = this.state.carList
        list.push(newCar)
        this.setState({
            carList: list
        })
    }

    deleteACar = (car)=>{
        console.log('delete a car')
        let arr = this.state.carList
        let tempArr = arr.filter(item => item.id !== car.id)
        console.log(tempArr)
        this.setState({
            carList: tempArr
        })
    }

    render(){

        return (
            <React.Fragment>
                <AddComponent
                    addNewCar = {this.addNewCar}
                />
                
                <Child        
                    carList = {this.state.carList}
                    deleteCar = {this.deleteACar}
                />
            </React.Fragment>
            
        )
    }
}

export default Car;