import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'filter'
})

/*
* return filtered array based on place name
*/
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return it.launch_site_name_long.toLowerCase().includes(searchText);
    });
  }
}
