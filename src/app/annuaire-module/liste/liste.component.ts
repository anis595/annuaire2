import { Component, OnInit } from '@angular/core';
import { contact } from 'src/models/contact.model';
import { ContactsService } from 'src/services/contatcs.service';
@Component({
  selector: 'app-liste',
  templateUrl: './liste.component.html',
  styleUrls: ['./liste.component.css'],
})
export class ListeComponent implements OnInit {
  constructor(private ContactsService: ContactsService) {}

  tableau!: contact[];
  ngOnInit(): void {
    this.tableau = this.ContactsService.listerContacts();
  }
}
