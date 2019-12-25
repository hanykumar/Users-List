import { createSelector, createFeatureSelector } from '@ngrx/store';

import { IUsersState } from '../state/user.state';
import { IAppState } from '../state/app.state';

export const selectUsersState = createFeatureSelector<IAppState, IUsersState>('users')

export const selectUsers = createSelector(
    selectUsersState,
    (state: IUsersState) => state.users
)

export const selectUser = createSelector(
    selectUsersState,
    (state: IUsersState) =>  state.singleuser
)