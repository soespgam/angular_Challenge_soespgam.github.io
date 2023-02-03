import { Component, Input } from '@angular/core';
import { ProfileHttpResponseInterface } from '../../interface/profile.interface';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  @Input() profile!: ProfileHttpResponseInterface;

}
