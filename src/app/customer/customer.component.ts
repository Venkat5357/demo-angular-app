import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import { Customer } from './models/customer.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {

  customers: Customer[] ;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.getCustomers('http://localhost:3000/users').subscribe((data: Customer[]) => {
      this.customers = data;
      console.log( this.customers);
     });
  }


}
