import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataService } from './data.service';

const apiUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private readonly http: HttpClient, private readonly dataService: DataService) { }

  public createProject(project: any): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.dataService.token}`
      })
    };
    return this.http.post(`${apiUrl}/projects`, project, options);
  }

  public addTeachers(projectId: string, teachersIds: number[]): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.dataService.token}`
      })
    };
    const body = {
      type: 'add',
      ids: teachersIds
    };
    return this.http.patch(`${apiUrl}/projects/${projectId}/teachers`, body, options);
  }

}
