import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {

  @Input() contactsList: Contact[];


  @Output() contatoEmissor: EventEmitter<Contact> = new EventEmitter();


  enviarContato(contato: Contact) {    
    this.contatoEmissor.emit(contato);
  }



}
