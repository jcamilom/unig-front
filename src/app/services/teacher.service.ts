import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DataService } from './data.service';

const apiUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class TeacherService {

  constructor(private readonly http: HttpClient, private readonly dataService: DataService) { }

  public getTeachers(): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.dataService.token}`
      })
    };
    return this.http.get(`${apiUrl}/teachers`, options);
  }

}
