import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private http: HttpClient) {
    this.http.get(environment.apiEndpoint + '/wake-up-call').subscribe();
  }
}
