import { Pipe, PipeTransform } from '@angular/core';
import { Expenseinterface } from '../interface/expenseinterface';

@Pipe({
  name: 'catagory'
})
export class CatagoryPipe implements PipeTransform {

  transform(value: Expenseinterface[], type: string): any {
    if (type === 'All' || type === undefined) {
      return value;
    } else {
      return value.filter(val => val.type === type);
    }
  }

}
