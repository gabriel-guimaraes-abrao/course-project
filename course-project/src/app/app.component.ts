import { Component } from '@angular/core';
import { Contact } from './contact.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = "course-project";

  contacts: Contact[] = [];

  contatoRecebido: Contact;

  constructor() {
    this.contatoRecebido = new Contact("", "", 0, "");
    this.contacts = [new Contact("Pamela", "imagem", 789, "email"),
    new Contact("Gabriel", "imagem", 989, "gabriel@email.com")]
  }


  receberContato(contatoSelecionado: Contact) {
    this.contatoRecebido = contatoSelecionado;
  }


}











