import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProjectEulerService {

  constructor(private http: HttpClient) {}

  findNthPrime(nthPrime: number): Observable<Object> {
    return this.http.get(environment.apiEndpoint + '/find_nth_prime?value=' + nthPrime);
  }

  largestPrimeFactor(inputNumber: number): Observable<Object> {
    return this.http.get(environment.apiEndpoint + '/largest_prime_factor?value=' + inputNumber);
  }

  sumSquareDifference(inputNumber: number): Observable<Object> {
    return this.http.get(environment.apiEndpoint + '/sum_square_difference?value=' + inputNumber);
  }
}