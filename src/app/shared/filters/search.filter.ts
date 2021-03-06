import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search',
  pure: false,
})
export class Search implements PipeTransform {
  transform(items: any[], attr: string, filter: any): any {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    return items.filter(
      (item) => item[attr].toLowerCase().indexOf(filter.toLowerCase()) !== -1
    );
  }
}
