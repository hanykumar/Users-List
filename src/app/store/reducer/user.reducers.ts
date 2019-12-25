import { Actions, ActionType } from '../action/user.actions';
import { InitialStateUsers, IUsersState } from '../state/user.state';

export function reducerUser(state = InitialStateUsers, action: Actions): IUsersState {
    switch(action.type) {
        case ActionType.OnLoadUsers:
           return {
               ...state,
               users: action.payload
           }
        case ActionType.OnClickUser:
            return {
                ...state,
                singleuser: action.payload
            }
        default: 
            return state; 
    }
}