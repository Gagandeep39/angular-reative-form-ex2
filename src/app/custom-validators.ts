import { FormControl } from "@angular/forms";
import { Observable } from "rxjs";

export class CustomValidators {
  static forbiddenNameValidator(
    control: FormControl
  ): { [s: string]: boolean } {
    if (control.value === "Test") return { nameIsForbidden: true };
    return null;
  }

  static forbiddenNameValidatorAsync(
    control: FormControl
  ): Promise<any> | Observable<any> | any {
    const promise = new Promise((resolve, reject) => {
      setInterval(() => {
        if (control.value === "Test") resolve({ nameIsForbidden: true });
        else resolve(null);
      }, 1000);
    });
    return promise;
  }
}
