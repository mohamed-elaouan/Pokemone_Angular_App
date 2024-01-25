import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "categorieVoiture",
})
export class CategorieVoiturePipe implements PipeTransform {
  transform(type: string): string {
    let color: string;
    switch (type) {
      case "sport":
        color = "btn btn-success";
        break;
      case "classic":
        color = "btn btn-secondary";
        break;
      case "famille":
        color = "btn btn-danger";
        break;
      case "transport":
        color = "btn btn-warning";
        break;
      case "marchandise":
        color = "btn btn-primary";
        break;
      default:
        color="btn btn-dark";
        break;
    }
    return `chip ${color}`;
  }
}
