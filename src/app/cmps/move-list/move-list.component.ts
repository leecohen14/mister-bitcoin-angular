import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-move-list',
  templateUrl: './move-list.component.html',
  styleUrls: ['./move-list.component.scss']
})
export class MoveListComponent implements OnInit {
@Input() transactions
  constructor() { }

  ngOnInit(): void {
  }

}
