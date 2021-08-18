import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  contacts$: Observable<Contact[]>

  constructor(private contactService: ContactService) { }

  ngOnInit(): void {
    // Before using the async pipe:
    // this.subscription = this.contactService.contacts$.subscribe(contacts => {
    //   this.contacts = contacts
    // })
    this.contactService.loadContacts()
    this.contacts$ = this.contactService.contacts$
  }

}
