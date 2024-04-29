import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { UpdateuserComponent } from './updateuser/updateuser.component';


const routes: Routes = [
  {path:"",
  component:HomeComponent
},
  {path:"register",
  component:RegisterComponent
},
  {path:"userprofile",
  component:UserprofileComponent
},
{
  path:"updateuser/:id" , component:UpdateuserComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
