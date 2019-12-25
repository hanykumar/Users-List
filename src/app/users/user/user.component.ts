import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from 'src/app/store/state/app.state';
import { selectUser } from 'src/app/store/selector/user.selectors';
import { user } from 'src/app/entities/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  public user: user;

  constructor(private store: Store<IAppState>) { }

  ngOnInit() {
    this.user = null
    this.store.pipe(select(selectUser))
    .subscribe(res => {
      this.user = res;
    })
  }
}
