import { Component, inject } from '@angular/core';
import { Register } from '../dataTypes';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../register.service';
import { MatChipEditedEvent, MatChipInputEvent } from '@angular/material/chips';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Router } from '@angular/router';
export interface Tag {
  name: string;
  tags :string;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  photoPreview: string | undefined;
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




  title = 'NimapProject';
  registerForm! : FormGroup ;
  countries: String[] = ['India', 'Canada', 'USA', 'Australia', 'America', 'Kenia']
  states: String[] = ['Maharashtra', 'Goa', 'Bihar', 'Manipur', 'Keral', 'Madhya Pradesh']
  selectedFile: File | null = null;
  addresponce:any;

userList: undefined| Register[]
  constructor( private fb:FormBuilder, private registerService:RegisterService, private router:Router){

  }
  
  
  ngOnInit(){
  this.registerForm = this.fb.group({
    imageInput: [ '',Validators.pattern('^(https?://.*\\.(?:png|jpg))(\\?w=310&h=325)?$')],
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

  }




  onFileChange(event:any):void{
    const file = event.target.files[0]; 
    const reader = new FileReader();
    
   
    if (file && file.type.startsWith('image')) {
      const maxSize = 310 * 325; 
      const fileSize = file.size; 
      
      
      if (fileSize <= maxSize) {
        reader.onload = () => {
          
          this.photoPreview = reader.result as string;
        };
        
     
        reader.readAsDataURL(file);
      } else {
      
        alert('Please select an image with size not exceeding 310x325 pixels.');
      }
    } else {
     
      alert('Please select a valid image file.');
    }
  }

  


onSubmit(){
console.log(this.registerForm.value);
this.router.navigateByUrl("userprofile");
this.registerService.addUser(this.registerForm.value).subscribe((data)=>{
  this.userList = data;
alert("User Added Successfully!!!");

});
}

}


