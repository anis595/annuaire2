import { Injectable } from '@angular/core';
import { contact } from 'src/models/contact.model';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  listeContacts: contact[] = [
    {
      id: 1,
      nom: 'contact 1',
      prenom: 'contact 1',
      adresse: 'adresse',
      telephone: '0601293550',
      photo: '',
      client: true,
    },
    {
      id: 2,
      nom: 'contact 2',
      prenom: 'contact 2',
      adresse: 'adresse',
      telephone: '0601293550',
      photo: '',
      client: true,
    },
  ];
  listerContacts(): contact[] {
    return this.listeContacts;
  }
}
