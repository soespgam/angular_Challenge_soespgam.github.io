import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import{FormsModule,ReactiveFormsModule}from'@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { UserRoutingModule } from './user-routing.module';
import { UserListUrlsComponent } from './pages/user-list-urls/user-list-urls.component';
import { UserListUrlsHttpService } from './services/user-list-urls-http.service';

//components
import { ProfileComponent } from './components/profile/profile.component';
import { FormUrlComponent } from './components/form-url/form-url.component';
import { CardUrlComponent } from './components/card-url/card-url.component';


@NgModule({
  declarations: [
    UserListUrlsComponent,
    ProfileComponent,
    FormUrlComponent,
    CardUrlComponent,
    ProfileComponent,
    FormUrlComponent,
    CardUrlComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[
    UserListUrlsHttpService
  ]
})
export class UserModule { }
