import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.scss']
})
export class ContactEditComponent implements OnInit {
  contact: Contact
  subscription: Subscription
  imgPath = null
  constructor(private contactService: ContactService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    console.log('Edit Init!');
    this.subscription = this.route.data.subscribe(data => {
      this.contact = data.contact || this.contactService.getEmptyContact()
      // console.log(`this.contact`, this.contact)
    })
    if(this.contact._id){
      this.imgPath = `https://robohash.org/${this.contact._id}`
    }
  }

  async onSaveContact(ev){
    ev.preventDefault()
    try {
      // await this.contactService.saveContact(this.contact).toPromise() 
      //the above line used toPromise when u get an observable from the service by of, etc
      console.log(`this.contact`, this.contact)
      await this.contactService.saveContact(this.contact)
      this.router.navigateByUrl('/')
    } catch (err) {
      // this.errMsg = err
      console.log(err);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

}
