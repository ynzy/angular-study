import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class HttpaxiosService {

  constructor() { }
  get(api) {
    return axios.get(api)
            .then(function (response) {
              // handle success
              // console.log(response);
              return response.data
            })
  }
  post(api,params){
    return axios.post(api, params)
            .then(function (response) {
              return response.data
            })
            .catch(function (error) {
              console.log(error);
            });
  }
}
