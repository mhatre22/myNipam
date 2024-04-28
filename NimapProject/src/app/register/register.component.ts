import { Component } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userList :any;
  constructor(private registerService :RegisterService){
  }
ngOnInit(){
  this.registerService.userList().subscribe(result =>{
    this.userList = result;
    console.log(result);

  });
}
}
