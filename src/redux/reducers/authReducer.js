import { USER_LOGIN } from '../type';

const auth = (state = {}, action) => {
    switch (action.type) {
        case USER_LOGIN:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state
    }
}


export default auth