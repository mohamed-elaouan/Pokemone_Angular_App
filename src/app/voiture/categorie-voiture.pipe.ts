import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "categorieVoiture",
})
export class CategorieVoiturePipe implements PipeTransform {
  transform(type: string): string {
    let color: string;
    switch (type) {
      case "Sport":
        color = "btn btn-success";
        break;
      case "Classic":
        color = "btn btn-secondary";
        break;
      case "Family":
        color = "btn btn-danger";
        break;
      case "Transport":
        color = "btn btn-warning";
        break;
      case "Marchandise":
        color = "btn btn-primary";
        break;
      default:
        color = "btn btn-dark";
        break;
    }
    return `chip ${color}`;
  }
}
