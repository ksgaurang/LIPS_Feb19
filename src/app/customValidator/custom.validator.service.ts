import { AbstractControl, FormGroup, FormArray } from '@angular/forms';


export class CustomValidator{

  static mobileNoValidator(control: AbstractControl) {

      const mobNumber = control.value as string;
      if (mobNumber.startsWith('91')) {
          return null;
      } else {
        return { isInValidNumber: true};
      }
  }

  static validateDateRange(form: FormGroup) {
    const historyForm =  form['controls'].previousHistory as FormArray;
    for (const control of historyForm['controls']) {
      const fromDate = control.get('fromDate');
      const toDate = control.get('toDate');

      if (fromDate.value < toDate.value) {
        fromDate.setErrors(null);
        return null;
      } else {
        fromDate.setErrors({ inValidDate: true});
        return { inValidDate: true};
      }

    }
  }
}
