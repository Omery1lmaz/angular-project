import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todoStatus',
})
export class TodoStatusPipe implements PipeTransform {
  transform(value: boolean, ...args: any[]) {
    return value ? 'Done' : 'Pending';
  }
}
