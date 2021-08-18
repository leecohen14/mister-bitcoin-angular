import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent implements OnInit {

  contact:Contact
  subscription: Subscription
  imgPath= null
  constructor(private contactService: ContactService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    console.log('Details Init!');
    this.subscription = this.route.data.subscribe(data => {
      this.contact = data.contact
      this.imgPath = `https://robohash.org/${this.contact._id}`
      window.scrollTo(0, 0)
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }

  onGoHome(){
    console.log('happend');
    
    this.router.navigateByUrl('/')
  }

}
