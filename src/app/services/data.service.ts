import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public user: any;
  public token: string;

  constructor() { }
}
