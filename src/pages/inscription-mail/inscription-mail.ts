import {Component, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgeValidator } from  '../../validators/age';
import { MailValidator } from  '../../validators/mail';
import { PasswordValidator } from "../../validators/password";
import { PasswordConfirmationValidator } from "../../validators/passwordConfirmation";


@Component({
  selector: 'page-inscription-mail',
  templateUrl: 'inscription-mail.html',
})
export class InscriptionMailPage {

    @ViewChild('signupSlider') signupSlider: any;

    header_data: any; // Déclaration options du custom-header

  slideFormMail: FormGroup;
  slideFormPassword: FormGroup;
  slideFormPrenom: FormGroup;
  slideFormNom: FormGroup;
  slideFormAge: FormGroup;
  slideFormPhoneNumber: FormGroup;
  slideFormSexe: FormGroup;
  slideForms: Array<FormGroup>;
  formFields: Array<string>;
  submitAttempt: boolean = false;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder) {
    // Initialisation des valeurs des options du custom-header
    this.header_data = {
      hideBackButton: false,
      withProfile: false,
      withTranslate: true,
      title: "Inscription"
    };

    this.slideFormMail = formBuilder.group({
        mail: ['',
            Validators.compose([
                Validators.required,
                MailValidator.isValid
            ])
        ]
    });
    this.slideFormPassword = formBuilder.group({
        password: ['',
            Validators.compose([
                Validators.required,
                PasswordValidator.isValid
            ])
        ],
        passwordConfirmation: ['',
            Validators.compose([
                Validators.required,
                PasswordConfirmationValidator.isValid
            ])
        ]
    });
    this.slideFormPrenom = formBuilder.group({
        prenom: ['',
            Validators.compose([
                Validators.maxLength(30),
                Validators.pattern('[a-zA-Z ]*'),
                Validators.required
            ])
        ]
    });
    this.slideFormNom = formBuilder.group({
        nom: ['',
            Validators.compose([
                Validators.maxLength(30),
                Validators.pattern('[a-zA-Z ]*'),
                Validators.required
            ])
        ]
    });
    this.slideFormAge = formBuilder.group({
        age: ['',
            AgeValidator.isValid
        ]
    });
    this.slideFormPhoneNumber = formBuilder.group({
        phoneNumber: ['']
    });
    this.slideFormSexe = formBuilder.group({
        sexe: ['none']
    });

    this.slideForms = [
        this.slideFormMail,
        this.slideFormPassword,
        this.slideFormPrenom,
        this.slideFormNom,
        this.slideFormAge,
        this.slideFormPhoneNumber,
        this.slideFormSexe,
    ];

      this.formFields = [
        'mail',
        'password',
        'prenom',
        'nom',
        'age',
        'phoneNumber',
        'sexe',
      ];
  }

  next(){
    this.signupSlider.slideNext();
  }

  prev(){
    this.signupSlider.slidePrev();
  }

  save(){
    this.submitAttempt = true;
    let errorInsideForm: boolean = false;

    this.slideForms.forEach((form, key) => {

        this.formFields.forEach((formKey, index) => {
            var formValue = form.value.valueOf()[formKey];
            if (formValue) {
                window.localStorage.setItem(formKey, formValue);
            }
        });

        if(!form.valid){
          this.signupSlider.slideTo(key-1);
          errorInsideForm = true;
        }
    });

    if (!errorInsideForm) {
        console.log("success");
    }
  }
}