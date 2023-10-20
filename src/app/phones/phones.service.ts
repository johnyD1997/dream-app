import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Phone } from './phone.model';

@Injectable({
  providedIn: 'root'
})
export class PhonesService {
    
 constructor(private http: HttpClient) { }

getPhones() {
    return this.http.get('assets/phones/phones.json')
  }


  getDetails(id: string) {
    return this.http.get('assets/phones/' + id + '.json');
  }
}


