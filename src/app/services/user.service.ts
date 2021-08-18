import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  USER_KEY = 'user'
  user = null
  constructor(private storageService: StorageService) { }
  getUser() {
    let user = this.storageService.loadFromStorage(this.USER_KEY)
    if (!user) {
      user = {
        name: "Ochoa Hyde",
        coins: 100,
        moves: []
      }
      this.storageService.saveToStorage(this.USER_KEY, user)
    }
    // console.log('user', user);
    this.user = user
    return user
  }
  onTransferCoins(transaction) {
    //update users moves array and decrease his coins amount
    if(!this.user) this.getUser()
    this.user.coins = this.user.coins - +transaction.amount
    transaction.time = Date.now()
    //move function
    this.addMove(transaction)
    this.storageService.saveToStorage(this.USER_KEY,this.user)
  }

  addMove(transaction){
    this.user.moves.unshift(transaction)
  }
}
