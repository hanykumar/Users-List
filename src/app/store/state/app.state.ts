import { IUsersState, InitialStateUsers } from './user.state';

export interface IAppState {
    users: IUsersState
}
export const initialAppState: IAppState = {
    users: InitialStateUsers
}