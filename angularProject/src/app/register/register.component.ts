import { Component } from '@angular/core';
import { FormGroup, FormBuilder,Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm =new FormGroup({
firstname :new FormControl('',[Validators.required, Validators.minLength(10)]),
lastname : new FormControl('',[Validators.required, Validators.minLength(18)]),
email:new FormControl(''),
contact:new FormControl(''),
age:new FormControl(''),
state:new FormControl(''),
country:new FormControl(''),
address: new FormControl(''),
tag: new FormControl(''),
 })

 register(){
  console.log(this.registerForm.value);
 }
 get firstname(){
  return this.registerForm.get('firstname')
 }

  
}
 
