import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "categorieVoiture",
})
export class CategorieVoiturePipe implements PipeTransform {
  transform(type: string): string {
    let color: string;
    switch (type) {
      case "sport":
        color = "green lighten-1";
        break;
      case "classic":
        color = "blue lighten-1";
        break;
      case "famille":
        color = "yellow lighten-1";
        break;
      case "transport":
        color = "red lighten-1";
        break;
      case "marchandise":
        color = "brown lighten-1";
        break;
      default:
        color="gray";
        break;
    }
    return `chip ${color}`;
  }
}
