

// Angular
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

// Vendor
import { throwError, Observable } from 'rxjs';
import { tap, catchError, map } from 'rxjs/operators';

// Models
import { PersonModel } from 'src/shared/models';

@Injectable()
export class PersonService {

  formData: PersonModel;
  list: PersonModel[];
  fullList: PersonModel[];


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
    return this.httpClient.get<PersonModel[]>(`${this.rootURL}/people`).pipe(
      map(data => data),
      catchError(this.handleError)
    );
  }

  getSingleRecord(id) {
    // let id = formData.PersonId;
    return this.httpClient.get(`${this.rootURL}/people/${id}`)
  }

  postRecord(formData: PersonModel) {
    delete formData.personId
    return this.httpClient.post<PersonModel>(`${this.rootURL}/people`, formData)
  }

  putRecord(formData: PersonModel) {
    let id = formData.personId;
    return this.httpClient.put<PersonModel>(`${this.rootURL}/people/${id}`, formData)
  }


  deleteRecord(formData: PersonModel) {
    let id = formData.personId;
    return this.httpClient.delete(`${this.rootURL}/people/${id}`)
  }

  ping() {
    return this.httpClient.get(`${this.rootURL}/ping`)
  }
}
