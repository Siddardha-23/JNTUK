import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class BackendService {

	_baseURL: string = 'http://127.0.0.1:3000'
	constructor(private httpClient: HttpClient) { }

	get(url: string, params: any): Observable<any> {
		return this.httpClient.get(this._baseURL + url, { params });
	}

	post(url: string, data: any): Observable<any> {
		const config = {
			headers: new HttpHeaders()
				.set('Content-Type', 'application/json')
				.set('Access-Control-Allow-Origin', '*')
				.set('Access-Control-Allow-Methods', 'POST')
		}
		return this.httpClient.post<any>(this._baseURL + url, data, config)
	}

	upload(url: string, data: FormData): Observable<any> {
		const config = {
			headers: new HttpHeaders()
				.set('Content-Type', 'false')
				.set('Access-Control-Allow-Origin', '*')
				.set('Access-Control-Allow-Methods', 'POST'),
			contentType: false,
			processData: false,
		}
		return this.httpClient.post<any>(this._baseURL + url, data, config)
	}

}