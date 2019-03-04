import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  public baseUri = 'http://localhost:8090/customer/customers';

  constructor(protected http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(this.baseUri);
  }

  get(id: number): Observable<any> {
    return this.http.get(this.baseUri + '/' + id);
  }

  save(customer: any): Observable<any> {
    let result: Observable<any>;
    if (customer['href']) {
      result = this.http.put(customer.href, customer);
    } else {
      result = this.http.post(this.baseUri, customer);
    }
    return result;
  }

  remove(id: number) {
    return this.http.delete(this.baseUri + '/' + id);
  }

}
