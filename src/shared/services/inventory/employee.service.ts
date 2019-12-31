
// Angular
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

// Vendor
import { throwError, Observable } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

// Models
import { EmployeeModel } from 'src/shared/models/';

@Injectable()
export class EmployeeService {

  formData: EmployeeModel;
  list: EmployeeModel[];
  fullList: EmployeeModel[];


  readonly rootURL = `http://localhost:3151`

  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Accept', 'application/json');

  constructor(
    private httpClient: HttpClient,
  ) { }

  private handleError(error: any) {
    console.error('CATCHED ON SERVICE...', error);
    return throwError(error);
  }

  getRecords() {
    return this.httpClient.get<EmployeeModel[]>(`${this.rootURL}/employees`).pipe(
      map(data => data),
      catchError(this.handleError)
    );
  }

  getSingleRecord(id) {
    // let id = formData.employeeId;
    return this.httpClient.get(`${this.rootURL}/employees/${id}`)
  }

  postRecord(formData: EmployeeModel) {
    delete formData.employeeId
    return this.httpClient.post<EmployeeModel>(`${this.rootURL}/employees`, formData)
  }

  putRecord(formData: EmployeeModel) {
    let id = formData.employeeId;
    return this.httpClient.put<EmployeeModel>(`${this.rootURL}/employees/${id}`, formData)
  }


  deleteRecord(formData: EmployeeModel) {
    let id = formData.employeeId;
    return this.httpClient.delete(`${this.rootURL}/employees/${id}`)
  }

  ping() {
    return this.httpClient.get(`${this.rootURL}/ping`)
  }
}
