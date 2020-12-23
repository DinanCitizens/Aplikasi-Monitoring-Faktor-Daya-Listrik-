import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const apiUrl = "https://api.thingspeak.com/channels/1163360/feeds.json?api_key=6KZQ9IWS362V6KF1&timezone=Asia/Jakarta";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  get(start, end): Promise<any>{
  	return this.http.get(apiUrl, {
      headers: {
        'Content-Type': 'application/json'
      },
      params: {
        start: start,
        end: end
      }
    }).toPromise();
  }

}
