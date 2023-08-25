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
  uri = 'https://localhost:7220/api';

  constructor(private http: HttpClient) { }

  BuscarPorCodigoAno(codigoFipe: string, ano: number) : Observable<TabelaFipe> {
    const apiUrl = `${this.uri}/Home/${codigoFipe}/${ano}`;
    return this.http.get<TabelaFipe>(apiUrl);
  }

  BuscarPorPlaca(placa: string) : Observable<TabelaFipe> {
    const apiUrl = `${this.uri}/Home/BuscarPorPlaca/${placa}`;
    return this.http.get<TabelaFipe>(apiUrl);
  }

  SalvarPlaca(tabelaFipe: TabelaFipe): Observable<TabelaFipe> {
    return this.http.post<TabelaFipe>(`${this.uri}/Home`, tabelaFipe, httpOptions);
  }
}
