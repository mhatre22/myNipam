import { Component } from '@angular/core';
import { FormBuilder,FormGroup,Validators,FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  
  registrationForm!: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(18)]]
    });
  }

  onSngSubmit() {
    if (this.registrationForm.valid) {
      console.log('Form submitted:', this.registrationForm.value);
    } else {
      console.log('Form is invalid');
    }}}