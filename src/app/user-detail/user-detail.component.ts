import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
   @Input() userDetail!: boolean;
  constructor() { }

  ngOnInit(): void {
  }


  closeUserDetail(){
    if(this.userDetail){
      this.userDetail = false;
    }else{
      this.userDetail = true;
    }
  }
}


