import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  _notification: any = {};
  getNotification() {
    return this._notification;
  }
  setNotification(notification: any){
    this._notification = notification;
    setTimeout(() => {
      this._notification = {};
    }, 1000 * 7);
  }
}
