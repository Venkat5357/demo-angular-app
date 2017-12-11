import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Customer } from './models/customer.model';
import {catchError , map} from 'rxjs/operators';



@Injectable()
export class CustomerService {

  constructor(private http: HttpClient) { }

  getCustomers(url: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(url);
  }

}
