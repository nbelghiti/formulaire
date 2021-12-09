import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {HttpClientModule} from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class RegionService {

  constructor(private http: HttpClient) { }
  // https://geo.api.gouv.fr/regions?fields=nom,code

  // tslint:disable-next-line:typedef
  getRegions(): any {
    return this.http.get('https://geo.api.gouv.fr/regions?fields=nom');
  }

}
