import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';
import { UserFormComponent } from './user-form/user-form.component';
import { UserListComponent } from './user-list/user-list.component';

@NgModule({
  declarations: [
    UserFormComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ],
  exports:[
    UserFormComponent,
    UserListComponent
  ]
})
export class UserModule { }
