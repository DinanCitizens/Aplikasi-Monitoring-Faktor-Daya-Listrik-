import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
	headers: new HttpHeaders({'Content-Type': 'application/json'})
};

const apiUrl = "https://api.thingspeak.com/channels/1092085/feeds.json?api_key=YJQJLM4J0A3IP1QU&results=10";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse){
  	if (error.error instanceof ErrorEvent){
  		console.error('An error occured', error.error.message);
  	} else{
  		console.error(
  			'Backend returned code ${error.status}, ' +
  			'body was: ${error.error}');
  	}
  	return throwError('Something bad happened');
  }

  private extractData(res: Response){
  	let body = res;
  	return body || {};
  }
  getDataField(): Observable<any>{
  	return this.http.get(apiUrl, httpOptions).pipe(
  		map(this.extractData),
  		catchError(this.handleError));
  }
}
