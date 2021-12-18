import React from 'react';

class Child extends React.Component{

    state= {
        showJob: false
    }


    handleOnClick = (e)=>{
        this.setState({
            showJob: !this.state.showJob
        })
    }

    handleSpanOnClick = (car)=>{
        console.log(car)
        this.props.deleteCar(car)
    }

    render(){
        let {carList} = this.props
        let {showJob} = this.state
        return (
            <>
                {showJob === false ?
                    <div><button onClick={(e)=>this.handleOnClick(e)}>Show</button></div>
                :
                    <>
                    {
                        carList.map((item,index)=>{
                            return (
                                <div key={index}>{item.carName} - {item.price} <></>  <span onClick={()=>this.handleSpanOnClick(item)}>x</span></div>
                            )
                         })
                    }
                    <div><button onClick={(e)=>this.handleOnClick(e)}>Hide</button></div>
                    </>
                    
                }
                
            </>           
        )
    }
}


// const Child = (props)=>{
//     console.log('prop: ',props)
//     let {carList} = props
//     return (
//         <>
//             {
//                 carList.map((item,index)=>{
//                     return (
//                         <div className='item' key={index}>
//                             {item.carName} - {item.price}
//                         </div>
//                     )
//                 })
//             }
//         </>
//     )
// }

export default Child;