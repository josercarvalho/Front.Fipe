import { TabelaFipe } from './../Model/TabelaFipe.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class TabelaFipeService {
  url = 'https://localhost:7220/api/Home';

  constructor(private http: HttpClient) { }

  BuscarPorCodigoAno(codigoFipe: string, ano: number) : Observable<TabelaFipe> {
    const apiUrl = `${this.url}/${codigoFipe}/${ano}`;
    return this.http.get<TabelaFipe>(apiUrl);
  }

  BuscarPorPlaca(placa: string) : Observable<TabelaFipe> {
    const apiUrl = `${this.url}${"/BuscarPorPlaca/"}${placa}`;
    return this.http.get<TabelaFipe>(apiUrl);
  }

  SalvarPlaca(tabelaFipe: TabelaFipe): Observable<TabelaFipe> {
    return this.http.post<TabelaFipe>(this.url, tabelaFipe, httpOptions);
  }
}
