import { ContactsRepository } from './contactsRepository';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()

export class ContactsService {

  constructor (private contactsRepository: ContactsRepository, http: Http){}

  getcontacts() : any {
    return this.http.get()//get local host)

  }
  addcontact(firstname, lastname) : any {
    this.http.post()
    this.contactsRepository.Contacts.push(firstname,lastname);
  }
  removecontact(firstname) : any {
    delete this.contactsRepository.Contacts[firstname]
    this.http.delete()
  }
  editcontact(){
    this.http.put
  }
  sortcontact(){
    this.http.get()
  }
  searchcontact(){
    this.http.get()
  }


}
