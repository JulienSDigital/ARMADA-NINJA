import { FormControl } from '@angular/forms';

export class PasswordConfirmationValidator {

    static isValid(control: FormControl): any {
        if (control.value != control.root.value['password']) {
            return {
                "passwords doesnt match": true
            };
        }

        return null;
    }
}