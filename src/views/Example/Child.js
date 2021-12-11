import React from 'react';

class Child extends React.Component{
    render(){
        let {carList} = this.props
        return (
            <>
                {
                     carList.map((item,index)=>{
                        return (
                            <div key={index}>{item.carName} - {item.price}</div>
                        )
                     })
                }
            </>           
        )
    }
}

export default Child;