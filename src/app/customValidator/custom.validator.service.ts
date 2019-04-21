import { AbstractControl } from '@angular/forms';


export class CustomValidator{

  static mobileNoValidator(control: AbstractControl) {

      const mobNumber = control.value as string;
      if (mobNumber.startsWith('91')) {
          return null;
      } else {
        return { isInValidNumber: true};
      }
  }
}
