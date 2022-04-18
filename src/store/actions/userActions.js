import { userService } from "../../services/userService";


export function signup(name) {
    return (dispatch) => {
      const user = userService.signup(name)
      dispatch({ type: 'SET_USER', user })
    }
  }
