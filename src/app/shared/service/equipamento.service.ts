import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, retry } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Equipamento } from '../model/equipamento.model';

@Injectable({
  providedIn: 'root'
})
export class EquipamentoService {

  public url : string = 'http://localhost:8080/api/v1/Equipamentos';
  constructor(private httpClient: HttpClient) {}

  public getEquipamentos():Observable<Equipamento[]>{
    return this.httpClient.get<Equipamento[]>(`${this.url}`);
  }
  public postEquipamento(equipamento:Equipamento):Observable<Equipamento>{
    return this.httpClient.post<Equipamento>(`${this.url}`,equipamento);
  }
}
