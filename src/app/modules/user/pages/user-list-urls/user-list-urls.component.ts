import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { lastValueFrom } from "rxjs";

import { LinksHttpResponseInterface } from '../../interface/links.interface';
import { ProfileHttpResponseInterface } from '../../interface/profile.interface';

import { UserListUrlsHttpService } from '../../services/user-list-urls-http.service';

@Component({
  selector: 'app-user-list-urls',
  templateUrl: './user-list-urls.component.html',
  styleUrls: ['./user-list-urls.component.scss']
})
export class UserListUrlsComponent implements OnInit {

  public dataProfile: ProfileHttpResponseInterface;
  public listLinks: LinksHttpResponseInterface[];

  constructor(private router: Router, private userListUrlsHttpService: UserListUrlsHttpService) {
    this.dataProfile = {
      avatar: '',
      created_at: new Date(),
      id: '',
      email: '',
      name: ''
    }

    this.listLinks = [];

  }

  public async ngOnInit(): Promise<void> {
    await this.getUser();

    if (localStorage.getItem('links')) {
      this.listLinks = JSON.parse(localStorage.getItem('links')!)
    } else {
      await this.getLinks();
    }
  }

  public async getUser(): Promise<void> {
    try {
      const resp: ProfileHttpResponseInterface = await lastValueFrom(
        this.userListUrlsHttpService.getProfile(
          localStorage.getItem('token')!,
          localStorage.getItem('idUser')!
        )
      );
      this.dataProfile = resp;
      console.log('datos user', resp);
    } catch (error) {
      console.log('err', error);
    }
  }

  public async getLinks(): Promise<void> {
    try {
      const resp: LinksHttpResponseInterface[] = await lastValueFrom(
        this.userListUrlsHttpService.getLinksUser(
          localStorage.getItem('token')!
        )
      );
      this.listLinks = resp
    } catch (error) {
      console.log("err", error
      )
    }
  }

  public saveNewLink(linkNew: any) {
    this.listLinks.push(linkNew);
    localStorage.removeItem('links');
    localStorage.setItem('links', JSON.stringify(this.listLinks));
  }

  public removeLink(idLink: number) {
    this.listLinks.splice(idLink, 1);
    localStorage.removeItem('links');
    localStorage.setItem('links', JSON.stringify(this.listLinks));
  }

  public logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login/formlogin']);
  }

}
