import { Component, isDevMode } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private http:HttpClient) {}
  title = 'client';
  ngOnInit() {
    const baseUrl:string = (isDevMode() ? "http://localhost:8080" : window.location.origin) + '/api';
    const url:string = `${baseUrl}/products`;
    this.http.get(url).subscribe((response) => console.log(response));
  }
}
