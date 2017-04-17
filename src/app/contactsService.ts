import { ContactsRepository } from './contactsRepository';
import { Injectable } from '@angular/core';

@Injectable()

export class ContactsService {

  constructor (private contactsRepository: ContactsRepository){}

  getcontacts() : any {
    return this.contactsRepository.Contacts;

  }
  addcontact(firstname, lastname) : any {
    this.contactsRepository.Contacts.push(firstname,lastname);
  }
  removecontact(firstname) : any {
    delete this.contactsRepository.Contacts[firstname]
  }
  editcontact(){
      modal.alert()
        .message('Edit Contact')
        .open()
        .close()
  }


}
