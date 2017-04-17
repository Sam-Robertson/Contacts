import {Component, OnInit} from '@angular/core';
import { ContactsService } from '../contactsService'

@Component({
  selector: 'contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{

  public contactsList;
  title = 'And this works too! I hope I am doing this right!';

  constructor(private contactsService: ContactsService){}


  ngOnInit() {
    this.contactsList = this.contactsService.getcontacts();
    console.log("Heyo");
    console.log(this.contactsList);

  }
  getcontacts() : any {
    this.contactsService.getcontacts();

  }
  myAdd(firstname, lastname) : any {
    this.contactsService.getcontacts(firstname, lastname);
  }
  myRemove(firstname) : any {
    this.contactsService.removecontacts(firstname);
  }
  myEdit(){

  }
}



// printContacts() : string {
//   return Contacts;
// }
