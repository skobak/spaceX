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
      const isShortNameContainString = it.launch_site_name
        .toLowerCase()
        .includes(searchText);

      const isLongNameContainString = it.launch_site_name_long
        .toLowerCase()
        .includes(searchText);

      return isShortNameContainString || isLongNameContainString;
    });
  }
}
