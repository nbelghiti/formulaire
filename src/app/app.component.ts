import { Component } from '@angular/core';
import { User } from './model/user.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'formulaire';
  users = [];
  newUser: User;
  result = false;

  constructor(){
    console.log('users', this.users);
    console.log(localStorage.getItem('users'));
    this.users = (localStorage.getItem('users')) ? JSON.parse(localStorage.getItem('users')) : [] ;
    console.log('users', this.users);
  }
  // tslint:disable-next-line:typedef
  addUser(newUser: User) {
    this.newUser = newUser;
    if (this.users.length > 0){
      this.result = this.checkExistance(newUser);
      if (!this.result) { this.users.push(newUser); }
    }else {
      this.users.push(newUser);
    }
    this.users.sort( this.compare );
    localStorage.setItem('users', JSON.stringify(this.users) );
  }

  // tslint:disable-next-line:typedef
  compare( a, b ) {
    if ( a.name < b.name ){
      return -1;
    }
    if ( a.name > b.name ){
      return 1;
    }
    return 0;
  }


  // tslint:disable-next-line:typedef
  checkExistance(user: User){
    let result = false;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.users.length; i++){
      if (this.users[i].lastName === user.lastName && this.users[i].name === user.name || this.users[i].phone === user.phone) {
          result = true;
      }
    }
    return result;
  }
}
