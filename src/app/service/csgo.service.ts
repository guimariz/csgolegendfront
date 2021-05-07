import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CsgoService {

  localhost = 'http://127.0.0.1:3000'


  constructor(private http: HttpClient) { }

  getPlayerCard(id: number) {
    let url = `${this.localhost}/player/card/${id}`

    return this.http.get(url).toPromise();
  }

  getTeamCard(id: number) {
    let url = `${this.localhost}/team/card/${id}`

    return this.http.get(url).toPromise();
  }

}
