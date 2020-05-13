import { USER_LOGIN, USER_LOGOUT } from '../type';

const auth = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                user: action.payload
            }
        case USER_LOGOUT:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}


export default auth