import { Effect, ofType, Actions } from '@ngrx/effects';
import { ActionType, LoadUsers, OnLoadUsers, ClickUser, OnClickUser } from '../action/user.actions';
import { Injectable } from '@angular/core';
import { UserServiceService } from '../../user-service.service';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';


@Injectable()
export class userEffects {
    constructor(private actions$: Actions, private userService: UserServiceService) { }

    @Effect()
    loadUsers$ = this.actions$.pipe(
        ofType<LoadUsers>(ActionType.LoadUsers),
        mergeMap(() => this.userService.getUsers().pipe(
            map(res => new OnLoadUsers(res.data)),
            catchError(() => EMPTY)
        )))

    @Effect()
    clickUser$ = this.actions$.pipe(
        ofType<ClickUser>(ActionType.ClickUser),
        mergeMap((action) => this.userService.getUser(action.payload).pipe(
            map(res => new OnClickUser(res.data)),
            catchError(() => EMPTY)
        ))
    )
}