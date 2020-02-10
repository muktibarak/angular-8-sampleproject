import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from './employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeserviceService {
  url: 'apiurl goes here'
  
  constructor(private httpClient: HttpClient) { }
  
  createEmployee(employee: Employee):Observable<Employee>{
    return this.httpClient.post<Employee>(this.url, employee)
  }
}
