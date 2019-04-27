import { Pipe, PipeTransform } from '@angular/core';
import { IInsuranceProvider } from './insurance-provider/IInsurance-provider';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(providers: IInsuranceProvider[], providerName: string): any {
    if (providerName !== '') {
      const data = providers.filter((provider) =>
          provider.name.toLowerCase().includes(providerName.toLowerCase()));
          return data;
    } else {
      return providers;
    }
  }

}
