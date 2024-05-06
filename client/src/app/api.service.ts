import { Injectable, isDevMode } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import axios from "axios";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl:string = (isDevMode() ? "http://localhost:8080" : window.location.origin) + '/api';
  constructor() { }
  async get(path:string) {
    try {
      const response = await axios.get(this.baseUrl + path);
      return response.data;
    } catch (err) {
      console.log(err);
    }
  }
  async post(path:string, body:any) {
    try {
      const response = await axios.post(this.baseUrl + path, body);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  }
}
