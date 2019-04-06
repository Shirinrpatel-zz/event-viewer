import { FormControl } from '@angular/forms';

export function restrictedWords(words) {
    return (formControl: FormControl) => {

        if (!words) return null;

        var invalidWords = words
            .map(w => formControl.value.includes(w) ? w : null)
            .filter(w => w != null);

        return invalidWords && invalidWords.length > 0
            ? { 'restrictedWords': invalidWords }
            : null;
    };
}