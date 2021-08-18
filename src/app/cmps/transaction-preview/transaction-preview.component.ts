import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-transaction-preview',
  templateUrl: './transaction-preview.component.html',
  styleUrls: ['./transaction-preview.component.scss']
})
export class TransactionPreviewComponent implements OnInit {
  @Input() transaction
  
  constructor() { }

  ngOnInit(): void {
  }

}
