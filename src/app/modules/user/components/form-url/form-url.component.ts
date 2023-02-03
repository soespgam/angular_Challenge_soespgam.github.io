import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LinksHttpResponseInterface } from '../../interface/links.interface';

@Component({
  selector: 'app-form-url',
  templateUrl: './form-url.component.html',
  styleUrls: ['./form-url.component.scss']
})
export class FormUrlComponent {
  @Input() linkId!: LinksHttpResponseInterface;
  @Output() newLink: EventEmitter<LinksHttpResponseInterface> = new EventEmitter();

  public addLink: LinksHttpResponseInterface

  public formLink: FormGroup = new FormGroup({
    url: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required])
  });

  constructor() {
    this.addLink = {
      id: '',
      createdAt: new Date(),
      url: '',
      description: '',
    }
  }

  public saveLink() {
    this.addLink = {
      id: `${parseInt(this.linkId.id) + 1}`,
      createdAt: new Date(),
      url: this.formLink.get('url')?.value,
      description: this.formLink.get('description')?.value,
    }
    this.newLink.emit(this.addLink);
    this.formLink.get('url')?.setValue(''),
    this.formLink.get('description')?.setValue('')
  }

} 
