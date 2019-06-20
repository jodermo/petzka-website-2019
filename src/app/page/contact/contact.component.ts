import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: []
})
export class ContactComponent implements OnInit {
  subjects = [
    {title: {de: 'Anfrage', en: 'Inquiry'}, value: 'Anfrage auf petzka.com'},
    {title: {de: 'Eine Frage', en: 'A question'}, value: 'Eine Frage auf petzka.com'}
  ];
  form: FormGroup;
  submitted = false;
  captcherResponse;
  error;

  constructor(public app: AppService) {
  }


  ngOnInit() {
    this.form = new FormGroup({
      'company': new FormControl(),
      'name': new FormControl(null, Validators.required),
      'email': new FormControl('', Validators.required),
      'phone': new FormControl(),
      'subject': new FormControl(this.subjects[0].value, Validators.required),
      'message': new FormControl('', Validators.required),
    });
  }

  get company() {
    return this.form.get('company');
  }

  get name() {
    return this.form.get('name');
  }

  get email() {
    return this.form.get('email');
  }

  get phone() {
    return this.form.get('phone');
  }


  get subject() {
    return this.form.get('subject');
  }

  get message() {
    return this.form.get('message');
  }

  sendMessage() {

    if (!this.form.invalid && this.captcherResponse) {
      this.submitted = true;
      this.app.contactForm(this.form.value, this.captcherResponse).subscribe(
        result => {
          console.log('contactForm', result);

        },
        error => this.error = error
      );
    } else {
      alert(this.app.text({de: 'Formular nicht richtig ausgefüllt', en: 'form not valid'}));
    }
  }

  resolved(captchaResponse: string) {
    this.captcherResponse = captchaResponse;
  }

}
