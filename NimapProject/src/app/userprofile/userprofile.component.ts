import { Component } from '@angular/core';
import { Register } from '../dataTypes';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.css']
})
export class UserprofileComponent {
  userList: undefined| Register[]

  constructor(private registerService:RegisterService){
  
  }
  ngOnInit(){
  this.List();
  }
  deleteUser(id:Number){
    console.log("id",id);
    this.registerService.deleList(id).subscribe(result =>{
    console.log(result);
    this.List();
    alert("User Deleted Successfully!!!")
    });
    }
    List(){
      this.registerService.userList().subscribe(result =>{
        this.userList = result;
        console.log(result);
    
      });
    }
  
  }
  