import { Component, Input } from '@angular/core';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-grid-item',
  standalone: true,
  imports: [
    NgOptimizedImage
  ],
  templateUrl: './grid-item.component.html',
  styleUrl: './grid-item.component.css'
})
export class GridItemComponent {
  @Input() itemName = {};
  @Input() itemCategory = {};
  @Input() itemPrice = {};
  @Input() itemImgUrl = {};
  @Input() itemManufacturer = {};
  @Input() itemQtyRemaining = {};
}
