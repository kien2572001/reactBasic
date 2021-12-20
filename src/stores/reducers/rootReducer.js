
const initState = {
    users: [
        {
            id: 1,
            name: 'Kien'
        },
        {
            id: 2,
            name: 'Quan'
        },
        {
            id: 3,
            name: 'Hello'
        }
    ]
}

const rootReducer  = (state = initState,action) =>{
    switch(action.type) {
        case 'DELETE_USER':
            console.log('Danmg delete user',action)
            let users = state.users
            users = users.filter(user => user.id!==action.payload.id)
            console.log(users)
            return {...state,users}
            break ;

        case 'CREATE_USER':
            console.log('Dang create  user',action)
            let id = Math.floor(Math.random()*10000)
            let arr = state.users
            return {...state,users: [...state.users,{
                id: id,
                name: `random + ${id}`
            }]}
            break ;
        default:
            return state
      }
    
}



export default rootReducer