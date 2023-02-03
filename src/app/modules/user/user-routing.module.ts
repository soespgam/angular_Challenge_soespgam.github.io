import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LinksUrlsGuard } from 'src/app/shared/links-urls.guard';
import { UserListUrlsComponent } from './pages/user-list-urls/user-list-urls.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'userUrlsList',
        component: UserListUrlsComponent,
        canActivate:[LinksUrlsGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
