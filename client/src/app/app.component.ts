import {Component, inject} from '@angular/core';
import {NgIf} from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {NavComponent} from "./components/nav/nav.component";
import {LoadingAnimationComponent} from "./components/loading-animation/loading-animation.component";
import {NotificationService} from "./services/notification.service";
import {NotificationComponent} from "./components/notification/notification.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavComponent, LoadingAnimationComponent, NgIf, NotificationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  notificationService: NotificationService = inject(NotificationService);
  title = 'client';
}
