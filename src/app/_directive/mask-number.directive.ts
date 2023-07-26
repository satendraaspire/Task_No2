import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appMaskNumber]',
})
export class MaskNumberDirective {
  constructor() {}

  @HostListener('input', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;

    let trimmed = input.value.replace(/\s+/g, '');

    if (trimmed.length > 10) {

      trimmed = trimmed.substr(0, 11);
      console.log(trimmed);
    }
    trimmed = trimmed.replace(/-/g, '');

    let numbers = [];

    numbers.push(trimmed.substr(0, 5));
    if (trimmed.substr(5, 3) !== '')
    {
      numbers.push(trimmed.substr(5, 5));

    }

    input.value = numbers.join('-');
  }
}
