import { Pipe, PipeTransform } from '@angular/core';
import { Phone } from '../phones/phone.model';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: Phone[], searchString: string): Phone[] {
    const searchStringLower = searchString.toLowerCase();
  return value.filter(phone => {
    return phone.name.toLowerCase().includes(searchStringLower) || phone.snippet.toLowerCase().includes(searchStringLower);
  });
  }

}
