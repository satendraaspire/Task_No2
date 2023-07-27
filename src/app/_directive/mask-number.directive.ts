import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appMaskNumber]',
})
export class MaskNumberDirective {
  constructor() {}

  @HostListener('input', ['$event'])
  onKeyUp(event: KeyboardEvent) {
    const input = event.target as HTMLInputElement;

    let trimmed = input.value.replace(/\s+/g, '');

    if (trimmed.length > 12) {
      trimmed = trimmed.substr(0, 12);
    }

    trimmed = trimmed.replace(/-/g, '');

    let numbers = [];

    numbers.push(trimmed.substr(0, 5));
    if (trimmed.substr(5, 2) !== '') numbers.push(trimmed.substr(5, 5));
    input.value = numbers.join('-');
  }
}
