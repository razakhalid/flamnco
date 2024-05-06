import { Component, Input } from '@angular/core';
import {GridItemComponent} from '../grid-item/grid-item.component';
import {NgFor} from "@angular/common";

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [GridItemComponent, NgFor],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent {
  @Input() items:any = [];
  ngOnInit() {
    console.log(this.items);
  }
}
