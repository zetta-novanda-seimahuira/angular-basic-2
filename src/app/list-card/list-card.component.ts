import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-card',
  templateUrl: './list-card.component.html',
  styleUrls: ['./list-card.component.css']
})
export class ListCardComponent implements OnInit {
  cardContent: any[] = ['content 1', 'content 2 ', 'content 3'];

  constructor() { }

  ngOnInit(): void {
  }

}
