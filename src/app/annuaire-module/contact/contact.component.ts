import { Component, Input } from '@angular/core';
import { contact } from 'src/models/contact.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  @Input() contact!: contact;
}
