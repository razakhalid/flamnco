import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingAnimationService {
  private _loading: boolean = false;
  public isLoading() {
    return this._loading;
  }
  public startLoading() {
    this._loading = true;
  }
  public stopLoading() {
    this._loading = false;
  }
}
