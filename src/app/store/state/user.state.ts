import {  user } from '../../entities/user.model'

export interface IUsersState { 
   users: user[],
   singleuser: user
}

export const InitialStateUsers: IUsersState = {
    users : [],
    singleuser : null
}
