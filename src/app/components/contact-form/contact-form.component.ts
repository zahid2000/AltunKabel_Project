import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ContactService } from 'src/app/services/contact.service';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent implements OnInit {
  FormData: FormGroup;
  constructor(private builder: FormBuilder, private contact: ContactService) {}
  breadcrumbitem = 'Əlaqə';
  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.FormData = this.builder.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.required, Validators.email]),
      Comment: new FormControl('', [Validators.required]),
      Subject: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    this.FormData.reset();
    // this.contact.postMessage(FormData).subscribe(
    //   (response) => {
    //     location.href = 'https://mailthis.to/confirm';
    //     console.log(response);
    //   },
    //   (error) => {
    //     console.warn(error.responseText);
    //     console.log({ error });
    //   }
    // );
  }
}
