import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Vegetales } from './interfaces/vegetales';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ServicesService {
  constructor(private http: HttpClient) { }

  getVegetales(): Observable<Vegetales[]> {
    return this.http.get<Vegetales[]>('https://scratchya.com.ar/vue/datos.php');
  }
}