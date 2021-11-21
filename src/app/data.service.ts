import { getLocaleDateFormat } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http : HttpClient) {  }
  getDate() {
    let url = " http://localhost:3000/plans";
    return this._http.get(url);
  }
}
