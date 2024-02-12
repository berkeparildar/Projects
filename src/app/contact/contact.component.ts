// contact.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  formData: any = {};

  submitForm() {
    // Handle form submission logic here
    console.log('Form submitted:', this.formData);
  }
}