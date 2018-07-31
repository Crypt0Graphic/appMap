import {  PipeTransform, Pipe } from '@angular/core';
import { ILocation } from './ilocation';

@Pipe({
    name: 'filter'
})

export class FilterPipe implements PipeTransform {

    transform(value: ILocation[], filter: string): ILocation[] {
        filter = filter ? filter.toLocaleLowerCase() : null;
        return filter ? value.filter((member: ILocation) =>
                // String ise Ad Soyad içinde arama yapsın.                
                member.name.toLocaleLowerCase().indexOf(filter) !== -1
            ) : value;
    }
}