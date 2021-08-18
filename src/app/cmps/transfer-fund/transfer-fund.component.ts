import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import { tap } from 'rxjs/operators';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-transfer-fund',
  templateUrl: './transfer-fund.component.html',
  styleUrls: ['./transfer-fund.component.scss']
})
export class TransferFundComponent implements OnInit {
  @Input() moveTo
  @Output() onGoHome = new EventEmitter()
  public bitcoinRate = null
  transaction = {
    amount: '',
    to: {
      id: '',
      name: ''
    },
    time:''
  }

  constructor(private userService: UserService, private bitcoinService:BitcoinService) { }

  ngOnInit(): void {
    this.bitcoinRate = this.bitcoinService.getBitcoinRate()
    this.transaction.to.id = this.moveTo._id
    this.transaction.to.name = this.moveTo.name
  }


  onTransferCoins(form) {
    this.userService.onTransferCoins(this.transaction)
    this.onGoHome.emit()
    // console.log('transfer form sent', this.transaction.amount)
  }
}
