import { Component } from '@angular/core';
import { Contact } from './contact.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = "course-project";

  contacts: Contact[];

  contatoRecebido: Contact;

  constructor() {    
    this.contacts = [
      new Contact("Pamela", "./../assets/pamela.png", 789, "pamela@email.com"), 
      new Contact("Gabriel", "./../assets/gabriel.png", 989, "gabriel@email.com")]    
  }  

  receberContato(contatoSelecionado: Contact) {
    this.contatoRecebido = contatoSelecionado;
  }

  onSubmit(form:any): void {
    // let nome:string = Object.values(form)[0];  
    // let imagem:string = Object.values(form)[1];
    // let telefone:number = +Object.values(form)[2];
    // let email:string = Object.values(form)[3];
    // let novoContato = new Contact(nome,imagem,telefone,email);
    // this.contacts.push(novoContato);
    console.log(form)
  }

}











