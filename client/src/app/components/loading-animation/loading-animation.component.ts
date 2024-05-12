import { Component, inject } from '@angular/core';
import { NgIf } from '@angular/common';
import {LoadingAnimationService} from "../../services/loading-animation.service";

@Component({
  selector: 'app-loading-animation',
  standalone: true,
  imports: [NgIf],
  templateUrl: './loading-animation.component.html',
  styleUrl: './loading-animation.component.css'
})
export class LoadingAnimationComponent {
  loadingAnimationService: LoadingAnimationService = inject(LoadingAnimationService);
}
