import { UtilService } from "../services/util.service";

export class Contact {

  constructor(
    public name: string = '',
    public phone: string = '',
    public email: string = '',
    public _id?: string,
    // private utilService: UtilService
  ) {}

  setId?() {
    // Implement your own set Id
    // this._id = this.utilService.makeId()
    this._id = this.makeId()
  }

  makeId?(length = 5) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }
}

