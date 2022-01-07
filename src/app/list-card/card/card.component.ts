import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cardStatus: string = 'offline';
  cardContent: any[] = [
    {
      "title":"content 1",
      "categori":1,
    },
    {
      "title":"content 2",
      "categori":2,
    },{
      "title":"content 3",
      "categori":3,
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  changeStatus() {
    return this.cardStatus = 'online';
  }
  getColor() {
    return this.cardStatus == 'online' ? 'green' : 'red';
  }

}
