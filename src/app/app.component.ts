import { Component, OnInit } from '@angular/core';
import { ServicesService } from './services.service';
import { Vegetales } from './interfaces/vegetales';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  vegetales!: Vegetales[];

  constructor(private vegetalesService: ServicesService) { }

  ngOnInit(): void {
    this.vegetalesService.getVegetales().subscribe(resp => {
      this.vegetales = resp;
    });
  }

  title = 'examenFinal';
}