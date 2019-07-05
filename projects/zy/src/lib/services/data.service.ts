import { Injectable, Inject } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { configService } from "../../public-api";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    @Inject(configService) private config,
    private http:HttpClient) { }

    getData() {
      return this.http.get(this.config.dataUrl)
    }
}
