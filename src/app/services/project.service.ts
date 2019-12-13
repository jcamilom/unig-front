import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const apiUrl = 'http://localhost:3000';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private readonly http: HttpClient) { }

  public createProject(project: any, token: string): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    return this.http.post(`${apiUrl}/projects`, project, options);
  }

  public addTeachers(projectId: string, teachersIds: number[], token: string): Observable<any> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      })
    };
    const body = {
      type: 'add',
      ids: teachersIds
    };
    return this.http.patch(`${apiUrl}/projects/${projectId}/teachers`, body, options);
  }

}
