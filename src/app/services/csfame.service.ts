import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CSPeopleModel } from '../models/cspeople';

@Injectable({
  providedIn: 'root'
})
export class CSFameService {

  constructor(private http:HttpClient) { }

  getPeople():Observable<CSPeopleModel>{
    return this.http.get<CSPeopleModel>("https://grandcircusco.github.io/demo-apis/computer-science-hall-of-fame.json");
  }
}
