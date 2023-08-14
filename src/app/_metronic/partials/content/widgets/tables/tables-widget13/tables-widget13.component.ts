import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tables-widget13',
  templateUrl: './tables-widget13.component.html',
})
export class TablesWidget13Component implements OnInit {

  jsonData = [
    {
      id: 1,
      value: {
        name: 'Račun',
        vrsta: [
          {
            info: 'info poruka računa',
            ime: 'Tekući račun',
            ugovoreno: 'true',
            aktivnost: 'Visoko aktivan',
            odboreno: 'false',
            iskoristeno: 'false',
            ponuditi: 'disable',
            napomena: 'nema napomene',
          },
          {
            info: 'info poruka računa',
            ime: 'Debitni račun',
            ugovoreno: 'true',
            aktivnost: 'Visoko aktivan',
            odboreno: 'false',
            iskoristeno: 'false',
            ponuditi: 'disable',
            napomena: 'nema napomene',
          },
          {
            info: 'info poruka računa',
            ime: 'Debitni račun',
            ugovoreno: 'true',
            aktivnost: 'Visoko aktivan',
            odboreno: 'false',
            iskoristeno: 'false',
            ponuditi: 'disable',
            napomena: 'nema napomene',
          },
          {
            info: 'info poruka računa',
            ime: 'Debitni račun',
            ugovoreno: 'true',
            aktivnost: 'Visoko aktivan',
            odboreno: 'false',
            iskoristeno: 'false',
            ponuditi: 'disable',
            napomena: 'nema napomene',
          },
        ],
      },
    },
    {
      id: 2,
      value: {
        name: 'Servis',
        vrsta: [
          {
            info: 'info poruka eba',
            ime: 'Eba',
            ugovoreno: 'true',
            aktivnost: 'Visoko aktivan',
            odboreno: 'false',
            iskoristeno: 'false',
            ponuditi: 'disable',
            napomena: 'nema napomene',
          },
          {
            info: 'info poruka mba',
            ime: 'mba',
            ugovoreno: 'true',
            aktivnost: 'Visoko aktivan',
            odboreno: 'false',
            iskoristeno: 'false',
            ponuditi: 'disable',
            napomena: 'nema napomene',
          },
        ],
      },
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  hoveredRow: number | null = null;
  hoveredVrsta: number | null = null;

  showInfo(row: number, vrsta: number): void {
    this.hoveredRow = row;
    this.hoveredVrsta = vrsta;
  }

  hideInfo(): void {
    this.hoveredRow = null;
    this.hoveredVrsta = null;
  }
}
