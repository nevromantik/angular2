import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {
   @Output() fromSingleToContainer: EventEmitter<any> = new EventEmitter<any>();
   userDetail: boolean = false; 
  constructor() { }

  ngOnInit(): void {
  }
   
  openUserDetail(){
    if(this.userDetail === false){
      this.userDetail = true;
    }else{
      this.userDetail = false;
    }
    this.fromSingleToContainer.emit(this.userDetail)
  }
}
