import { Component, Input, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact.model';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-preview',
  templateUrl: './contact-preview.component.html',
  styleUrls: ['./contact-preview.component.scss']
})
export class ContactPreviewComponent implements OnInit {
@Input() contact: Contact
imgPath = null
  constructor(private contactService: ContactService,) { }

  ngOnInit(): void {
    this.imgPath = `https://robohash.org/${this.contact._id}`
  }
  
  async onDeleteContact(){
    try{
      await this.contactService.deleteContact(this.contact._id)
    }catch(err){
      console.log(`err`, err)
    }
  }
}
