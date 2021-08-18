import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BitcoinService } from 'src/app/services/bitcoin.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public user = null
  public bitcoinRate = null
  public amountInDollar = null
  public showTransferForm = false
  constructor(private userService: UserService, private bitcoinService: BitcoinService) { }

  async ngOnInit() {
    this.user = this.userService.getUser()
    this.bitcoinRate = this.bitcoinService.getBitcoinRate().pipe(tap(res => this.amountInDollar = res))
    //  this.amountInDollar = this.bitcoinRate*this.user.coins
  }

  onShowTransferForm(){
    this.showTransferForm = true
    console.log('to true');
    
  }
  
  onCloseTransferForm(){
    this.showTransferForm = false
    console.log('to false');
  }


}
