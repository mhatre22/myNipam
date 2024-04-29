import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Register } from '../dataTypes';
import { RegisterService } from '../register.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
export interface Tag {
  name: string;
  tags :string;
}
@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent {
  registerForm!:FormGroup
  formatLabel(value: number): string {
    if (value >= 100) {
      return Math.round(value / 100) + 'Age';
    }

    return `${value}`;
  }
  addOnBlur = true;
  readonly separatorKeysCodes = [ENTER, COMMA] as const;
  tags: Tag[] = [{
    name: 'Kho-kho',
    tags: ''
  }, {
    name: 'Football',
    tags: ''
  }, {
    name: 'Criket',
    tags: ''
  }];

  announcer = inject(LiveAnnouncer);

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    //add value
    if (value) {
      this.tags.push({
        name: value,
        tags: ''
      });
    }

    event.chipInput!.clear();
  }

  remove(tag: Tag): void {
    const index = this.tags.indexOf(tag);

    if (index >= 0) {
      this.tags.splice(index);

      this.announcer.announce(`Removed ${tag}`);
    }
  }

  edit(tag: Tag, event: MatChipEditedEvent) {
    const value = event.value.trim();


    if (!value) {
      this.remove(tag);
      return;
    }


    const index = this.tags.indexOf(tag);
    if (index >= 0) {
      this.tags[index].name = value;
    }
  }
  countries: String[] = ['India', 'Canada', 'USA', 'Australia', 'America', 'Kenia']
  states: String[] = ['Maharashtra', 'Goa', 'Bihar', 'Manipur', 'Keral', 'Madhya Pradesh']
  selectedFile: File | null = null;
  userData : undefined|Register

userList: undefined| Register[]
  constructor( private fb:FormBuilder, private registerService:RegisterService, private router:Router,private route:ActivatedRoute){

  }
  
  
  ngOnInit(){
  this.registerForm = this.fb.group({
    imageInput: ['', [Validators.required]],
    firstname: ['', [Validators.required]],
    lastname:  ['', [Validators.required]], 
  email: ['', [Validators.required, Validators.email]],
  age: ['', [Validators.required]], 
    tag:  ['', [Validators.required]], 
    contact:  ['', [Validators.required]], 
    country: ['', [Validators.required]], 
    state:  ['', [Validators.required]], 
    addressType:  ['home', [Validators.required]], 
    address1:  ['', [Validators.required]], 
    address2:  ['', [Validators.required]], 
    companyAddress1:  ['', [Validators.required]], 
    companyAddress2:  ['', [Validators.required]], 
  });
let userId = this.route.snapshot.paramMap.get('id');
  userId && this.registerService.getUser(userId).subscribe(data =>{
    this.userData = data;
  })
  }
  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.registerForm.patchValue({
        profileImage: file
      });
    }
  }
  userUpdate(data:Register){
    console.log(this.registerForm.value);
    
  }
}

