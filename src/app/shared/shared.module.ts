import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { ToastrModule } from 'ngx-toastr';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ToastrModule.forRoot()
  ],
  exports:[
    HeaderComponent
  ]
})
export class SharedModule { }
