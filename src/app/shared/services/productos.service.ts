import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Productos } from '../models/productos';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductosService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<Productos[]> {
    return this.http.get<Productos[]>('http://localhost:3000/productos');
  }
}
