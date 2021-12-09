import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() users;
  filterText: '';
  constructor() { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  delete(index){
    this.users.splice(index, 1);
    localStorage.setItem('users', JSON.stringify(this.users) );
  }

}
