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
  result;

  // tslint:disable-next-line:typedef
  addUser(newUser: User) {
    this.newUser = newUser;
    if (this.users.length > 0){
      // // tslint:disable-next-line:prefer-for-of
      // for (let i = 0; i < this.users.length; i++) {
      // tslint:disable-next-line:max-line-length
      //   if (this.users[i].lastName === newUser.lastName && this.users[i].name === newUser.name || this.users[i].phone === newUser.phone) {
      //     this.result = true;
      //   }else{ this.result = false; }
      // }
      this.result = this.checkExistance(newUser);
      if (!this.result) { this.users.push(newUser); }
    }else {
      this.users.push(newUser);
    }
    console.log('users', this.users);
  }

  // tslint:disable-next-line:typedef
  checkExistance(user: User){
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.users.length; i++){
      if (this.users[i].lastName === user.lastName && this.users[i].name === user.name || this.users[i].phone === user.phone) {
          return true;
      }
      return false;
    }
  }
}
