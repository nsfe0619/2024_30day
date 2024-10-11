import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService
{
    // private jsonUrl = 'assets/mock/main-data.json';

    constructor(private http: HttpClient) { }

    getMainData(): Observable<any>
    {
        // return this.http.get(this.jsonUrl);
        return this.http.get('main');
    }
    getSettingData(): Observable<any>
    {
        // return this.http.get(this.jsonUrl);
        return this.http.get('setting');
    }

    getAddressData(): Observable<any>
    {
        // return this.http.get(this.jsonUrl);
        return this.http.get('address');
    }
}
