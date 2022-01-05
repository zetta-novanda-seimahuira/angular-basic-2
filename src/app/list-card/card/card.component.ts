import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  cardStatus: string = 'offline';
  cardContent: any[] = ['content 1', 'content 2 ', 'content 3'];

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
