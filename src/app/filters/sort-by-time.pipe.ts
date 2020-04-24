import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortByTime'
})
export class SortByTimePipe implements PipeTransform {

  transform(values: any[], key: string): any[] {
    return values.sort((a, b)=>b[key]-a[key]);
  }

}
