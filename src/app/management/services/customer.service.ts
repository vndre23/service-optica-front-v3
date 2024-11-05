import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '../../interfaces/customer.interface';
import { Observable } from 'rxjs';
import { environments } from '../../environments/environments.prod';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  private baseUrl: string = environments.baseUrl;

  getAllCustomers():Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.baseUrl}/customers`);
  }

  saveCustomer(request: Customer):Observable<Customer> {
    return this.http.post<Customer>(`${this.baseUrl}/customers`, request);
  }
}
