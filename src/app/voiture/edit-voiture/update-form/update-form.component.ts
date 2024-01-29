import { Component, Input, OnInit } from "@angular/core";
import { VoitureService } from "../../voiture.service";
import { Voiture } from "../../VoitureData/VoitureStructure";
import { Router } from "@angular/router";

@Component({
  selector: "app-update-form",
  templateUrl: "./update-form.component.html",
  styles: ``,
})
export class UpdateFormComponent implements OnInit {
  @Input() voiture: Voiture | undefined;
  //
  Categorie: string[];
  constructor(private VoitureS: VoitureService, private location: Router) {}
  //initializeCategorie-Voiture
  ngOnInit(): void {
    this.Categorie = this.VoitureS.getCategorieList();
    // this.voiture = this.VoitureS.getVoitureById("2");
  }
  // pour initialise le valeur
  hasType(type: string): boolean {
    if (this.voiture) {
      return this.voiture?.Categorie.includes(type);
    }
    return false;
  }
  //
  isTypeValid(type: string): boolean {
    // if (
    //   this.voiture &&
    //   this.voiture.Categorie.length > 2 &&
    //   !this.hasType(type)
    // ) {
    //   return true;
    // } else {
    //   return false;
    // }
    if (
      this.voiture &&
      this.voiture.Categorie.length == 1 &&
      this.hasType(type)
    ) {
      return false;
    }

    if (
      this.voiture &&
      this.voiture.Categorie.length > 2 &&
      !this.hasType(type)
    ) {
      return false;
    }

    return true;
  }
  //pour changer le valeur de la list de categorie voiture
  selectType(eo: Event, type: string) {
    const Ischecked: boolean = (eo.target as HTMLInputElement).checked;
    if (Ischecked) {
      this.voiture?.Categorie.push(type);
    } else {
      const indexElement = this.Categorie.indexOf(type);
      this.voiture?.Categorie.splice(indexElement, 1);
    }
  }
  OnValidate() {
    console.log("Submit Success!");
    //this.location.navigate(["/Voiture/", this.voiture.Id]);
  }
}
