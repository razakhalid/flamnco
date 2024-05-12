import { Component } from '@angular/core';
import {NgIf} from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {NavComponent} from "./components/nav/nav.component";
import {LoadingAnimationComponent} from "./components/loading-animation/loading-animation.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, LoadingAnimationComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor() {}
  title = 'client';
}
