import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todoStatus',
})
export class TodoStatusPipe implements PipeTransform {
  transform(value: string, ...args: any[]) {
    if (value == 'done') {
      return 'true';
    } else if (value == 'pending') {
      return 'false';
    }
    return 'false';
  }
}
