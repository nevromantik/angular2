import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  userDetail!: boolean;
  constructor() { }

  ngOnInit(): void {
  }
   show(fromSingleToList: any){
     this.userDetail = fromSingleToList;
     console.log(this.userDetail)
   }

   
}
