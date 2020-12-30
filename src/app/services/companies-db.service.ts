import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from '../model/company.model';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CompaniesDbService {
  private BASE_URL = 'https://5f59cabb8040620016ab960d.mockapi.io/companies';

  constructor(private http: HttpClient) {}

  getAllCompanies(): Observable<Company[]> {
    return this.http.get<Company[]>(this.BASE_URL).pipe(take(1));
  }
}
