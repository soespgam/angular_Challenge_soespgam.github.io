import { Component, Input,Output,EventEmitter } from '@angular/core';
import { LinksHttpResponseInterface } from '../../interface/links.interface'

@Component({
  selector: 'app-card-url',
  templateUrl: './card-url.component.html',
  styleUrls: ['./card-url.component.scss']
})
export class CardUrlComponent {
  @Input() link!: LinksHttpResponseInterface;
  @Output() deLink:EventEmitter<string> = new EventEmitter();

  public deletedLink(id:string){
    this.deLink.emit(id);
  }
}
