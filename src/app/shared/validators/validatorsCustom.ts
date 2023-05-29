import {Injectable} from "@angular/core";
import {AbstractControl, ValidationErrors} from "@angular/forms";

@Injectable({
    providedIn: 'root'
})

export class ValidatorsCustom {

    public minMaxValidator(control: AbstractControl): ValidationErrors | null {

        const fields = ['minPosts', 'maxPosts', 'minCommentCount', 'maxCommentCount', 'minKarma', 'maxKarma'];

        for (let i = 0; i < fields.length; i += 2) {
            const minFieldName = fields[i];
            const maxFieldName = fields[i + 1];
            const min = control.get(minFieldName)?.value;
            const max = control.get(maxFieldName)?.value;

            if (min !== null && max !== null && min > max) {
                control.get(maxFieldName)?.setErrors({ minMax: true });
            } else {
                control.get(maxFieldName)?.setErrors(null);
            }

            if (min !== null && max === '') {
                control.get(maxFieldName)?.setErrors(null);
            }
        }

        const minKarma = control.get('minKarma')?.value;
        const maxKarma = control.get('maxKarma')?.value;

        if (minKarma !== null && maxKarma !== null && minKarma > maxKarma) {
            control.get('maxKarma')?.setErrors({ minMaxKarma: true });
        } else {
            control.get('maxKarma')?.setErrors(null);
        }

        if (minKarma !== null && maxKarma === '') {
            control.get('maxKarma')?.setErrors(null);
        }

        if (control.errors && Object.keys(control.errors).length === 0) {
            control.setErrors(null);
        }

        return null;
    }
}