import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { LoadUsers, ClickUser } from '../store/action/user.actions';
import { IAppState } from '../store/state/app.state';
import { selectUsers } from '../store/selector/user.selectors';
import { user } from '../entities/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  public users: user[];
  constructor(private store: Store<IAppState>) { }

  ngOnInit() {
    this.store.dispatch(new LoadUsers());

    this.store.pipe(select(selectUsers)).subscribe(res => {
      this.users = res
    });
  }

  onUser(id: number) {
    this.store.dispatch(new ClickUser(id));
  }

  selected(event: any) {
    this.users.sort((a, b) => {
      var fa = `${a[event.target.value]}`.toUpperCase();
      var fb = `${b[event.target.value]}`.toUpperCase();
      if (fa < fb) 
        return -1
      if (fa > fb) 
        return 1
      return 0
    })
  }



}
