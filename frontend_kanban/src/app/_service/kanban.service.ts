import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const API = 'http://localhost:8080/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class KanbanService {

  constructor(private http: HttpClient) { }

  getDevelopers(): Observable<any> {
    return this.http.get(API + 'developers');
  }

  getTaskTypes(): Observable<any> {
    return this.http.get(API + 'task_types');
  }

  getTasks(): Observable<any> {
    return this.http.get(API + 'tasks');
  }

}
