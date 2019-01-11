import { FormControl } from '@angular/forms';

export class MailValidator {

    static isValid(control: FormControl): any {
        var mailformat = /^\w+((\.-)?\w+)*@\w+((\.-)?\w+)*(\.\w{2,3})+$/;

        if (!control.value.match(mailformat) && control.value) {
            return {
                "wrong format": true
            };
        } else {
            return null;
        }

    }
}