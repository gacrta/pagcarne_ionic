import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Crediario } from './crediario.model';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CrediarioService {
  
  private readonly endpoint = 'http://localhost:8080';
  // httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };

  constructor(private httpClient: HttpClient) { }

  getCrediarios(clienteId: number) {
    return this.httpClient
        .get<Crediario[]>(this.endpoint + '/crediarios/?clienteid=' + clienteId)
        .pipe<Crediario[]>(
          tap(console.log)
        );
  }
}