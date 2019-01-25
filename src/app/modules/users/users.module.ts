import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SSTFormsModule } from '@southsystem/forms';
import { SSTModalModule } from '@southsystem/modal';

import { UsersRoutingModule } from './users-routing.module';
import { IndexComponent } from './index/index.component';
import { FormComponent } from './form/form.component';
import { UserService } from './service/user.service';

@NgModule({
  declarations: [IndexComponent, FormComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SSTFormsModule,
    SSTModalModule
  ],
  providers: [
    UserService
  ]
})
export class UsersModule { }
