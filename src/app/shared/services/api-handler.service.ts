import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { config } from '../../config/app.config';

@Injectable()
export class ApiHandlerService {
  constructor(private http: HttpClient) {}

  post(endPoint: string, data: any) {
    return this.http.post(`${config.apiURL}${endPoint}`, data);
  }

  get(endPoint: string) {
    return this.http.get(`${config.apiURL}${endPoint}`);
  }
}
