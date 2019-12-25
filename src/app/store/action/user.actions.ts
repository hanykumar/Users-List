import { Action } from '@ngrx/store';
import { user } from '../../entities/user.model';

export enum ActionType {
    LoadUsers = '[LOAD USERS] LOAD USERS',
    OnLoadUsers = '[ON RESPONSE] ON LOAD USERS',
    ClickUser = '[CLICK USER] CLICK USER',
    OnClickUser = '[ON CLICK USER] ON CLICK USER'
}

export class LoadUsers implements Action {
    public readonly type = ActionType.LoadUsers;
}

export class OnLoadUsers implements Action {
    public readonly type = ActionType.OnLoadUsers;
    constructor(public payload: user[]) { }
}

export class ClickUser implements Action {
    public readonly type = ActionType.ClickUser;
    constructor(public payload: number) { }
}
export class OnClickUser implements Action {
    public readonly type = ActionType.OnClickUser;
    constructor(public payload: user) { }
}
export type Actions = LoadUsers | OnLoadUsers | ClickUser | OnClickUser;