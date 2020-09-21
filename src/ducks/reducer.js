import axios from 'axios'


const initialState = {
    username: '',
    profile: '',
    userId: 0
}

//Action contants
const GET_INFO = 'GET_INFO'




//Action Creators
export function getInfo(username, profile, userId) {
    return{
        type: GET_INFO,
        payload: {
            username, 
            profile,
            userId
         }
    }
}




export function reducer (state = initialState, action) {
    switch (action.type) {
       case GET_INFO:
           return {...state, username: action.payload.username, profile: action.payload.profile, userId: action.payload.userId}

        default: 
            return state

    }

}

export default reducer