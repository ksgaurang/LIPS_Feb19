import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mode'
})
export class ModePipe implements PipeTransform {

  transform(isCashLess: any, args?: any): any {
    return isCashLess ? 'Yes' : 'No';
  }

}
