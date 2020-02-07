import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "convertStringTo"
})
export class ConvertStringToPipe implements PipeTransform {
  transform(value: string, oldString: string, newString: string): string {
    return value.replace(oldString, newString);
  }
}
