import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NimapProject';
  registerForm! : FormGroup ;
  countries: String[] = ['India', 'Canada', 'USA', 'Australia', 'America', 'Kenia']
  states: String[] = ['Maharashtra', 'Goa', 'Bihar', 'Manipur', 'Keral', 'Madhya Pradesh']
  constructor( private fb:FormBuilder){
  }
  ngOnInit(){

  
  this.registerForm = this.fb.group({
    //image: ['', [Validators.required]],
    firstName: ['', [Validators.required]],
    lastName:  ['', [Validators.required]], 
  email: ['', [Validators.required, Validators.email]],
   // age: ['', [Validators.required]], 
    //tag:  ['', [Validators.required]], 
    contact:  ['', [Validators.required]], 
    country: ['', [Validators.required]], 
    state:  ['', [Validators.required]], 
    addressType:  ['home', [Validators.required]], 
    address1:  ['', [Validators.required]], 
    address2:  ['', [Validators.required]], 
    companyAddress1:  ['', [Validators.required]], 
    companyAddress2:  ['', [Validators.required]], 
  });

}
Submit(){
  console.log(this.registerForm.value);
}
}