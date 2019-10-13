const initialState={
    users:[]
}
const SET_REGISTER = 'SET_REGISTER';
const REGISTER = 'REGISTER';

export const setUsers =  (users) => ({
  type : SET_REGISTER ,
  users
})

const userReducer = (user=initialState,action) =>{
    switch(action.type){
        case REGISTER : 
        return{
            ...user,
            users : action.value
        }
        default : return user
    }
}

export default userReducer