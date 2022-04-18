import { userService } from "../../services/userService";
const INITIAL_STATE = {
    user: userService.getUser()
}

export function userReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: { ...action.user }
            };

        default:
            return state;
    }
}