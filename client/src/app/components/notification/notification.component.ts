import { Component, inject } from '@angular/core';
import {NgClass, NgIf} from "@angular/common";
import {NotificationService} from "../../services/notification.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-notification',
  standalone: true,
  imports: [
    NgClass,
    RouterLink,
    NgIf
  ],
  templateUrl: './notification.component.html',
  styleUrl: './notification.component.css'
})
export class NotificationComponent {
  notificationService: NotificationService = inject(NotificationService);
}
