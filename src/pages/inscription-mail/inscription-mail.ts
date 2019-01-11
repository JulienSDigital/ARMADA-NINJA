import {Component, ViewChild} from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AgeValidator } from  '../../validators/age';


@Component({
  selector: 'page-inscription-mail',
  templateUrl: 'inscription-mail.html',
})
export class InscriptionMailPage {

  // username:string;
  // password:string;
  // passwordConfirmation:string;

  header_data: any; // Déclaration options du custom-header


  @ViewChild('signupSlider') signupSlider: any;

  slideFormMail: FormGroup;
  slideFormPassword: FormGroup;
  slideFormPrenom: FormGroup;
  slideFormNom: FormGroup;
  slideFormAge: FormGroup;
  slideFormPhoneNumber: FormGroup;
  slideFormSexe: FormGroup;
  fofo: Array<FormGroup>;

    // formFields = {
    //     '0' : 'slideFormMailthis.',
    //     '1' : 'slideFormPassword',
    //     '2' : 'slideFormPrenom',
    //     '3' : 'slideFormNom',
    //     '4' : 'slideFormAge',
    //     '5' : 'slideFormPhoneNumber',
    //     '6' : 'slideFormSexe',
    // };

  submitAttempt: boolean = false;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder) {
    // Initialisation des valeurs des options du custom-header
    this.header_data = {
      hideBackButton: false,
      withProfile: false,
      withTranslate: true,
      title: "Inscription"
    };

    this.slideFormMail = formBuilder.group({mail: ['']});
    this.slideFormPassword = formBuilder.group({password: [''], passwordConfirmation: ['']});
    this.slideFormPrenom = formBuilder.group({prenom: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])]});
    this.slideFormNom = formBuilder.group({nom: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])]});
    this.slideFormAge = formBuilder.group({age: ['', AgeValidator.isValid]});
    this.slideFormPhoneNumber = formBuilder.group({phoneNumber: ['']});
    this.slideFormSexe = formBuilder.group({sexe: ['none']});

      this.fofo = [this.slideFormMail,
          this.slideFormPassword,
          this.slideFormPrenom,
          this.slideFormNom,
          this.slideFormAge,
          this.slideFormPhoneNumber,
          this.slideFormSexe];
  }

  next(){
    this.signupSlider.slideNext();
  }

  prev(){
    this.signupSlider.slidePrev();
  }

  save(){
    this.submitAttempt = true;
    this.fofo.forEach((value, key) => {
        if(!value.valid){
              this.signupSlider.slideTo(key-1);
                console.log(value);

        }
        else {
            console.log("success !");
        }
    });

      // for (let num of this.fofo) {
      //     console.log(num);
      // }
    // if(!this.slideOneForm.valid){
    //   this.signupSlider.slideTo(0);
    // }
    // else if(!this.slideTwoForm.valid){
    //   this.signupSlider.slideTo(1);
    // }
    // else if(!this.slideThreeForm.valid){
    //   this.signupSlider.slideTo(2);
    // }
    // else {
    //   console.log("success!")
    //   console.log(this.slideOneForm.value);
    //   console.log(this.slideTwoForm.value);
    // }
  }
}