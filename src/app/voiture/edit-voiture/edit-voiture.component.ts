import { Component, OnInit } from "@angular/core";
import { VoitureService } from "../voiture.service";
import { Voiture } from "../VoitureData/VoitureStructure";
import { ActivatedRoute } from "@angular/router";
import { Voitures } from "../VoitureData/VoitureInsertion";
import { FormsModule } from '@angular/forms';

@Component({
  selector: "app-edit-voiture",
  template: `
    <h4 class="container">
      Update <b>{{ voiture?.Marque }}</b>
    </h4>
    <hr>
    <div class="container">
      <img [src]="voiture?.Picture" style="width: 200px;"  class="card-img-top " alt="..." />
    </div>
    <app-update-form *ngIf="voiture" [voiture]="voiture"></app-update-form>
  `,
  styles: ``,
})
export class EditVoitureComponent implements OnInit {
  ListVoitures: Voiture[];
  voiture: Voiture | undefined;
  constructor(private Serv: VoitureService, private route: ActivatedRoute) {}
  ngOnInit() {
    this.ListVoitures = Voitures;
    //Affecter id qui dans le URl au cette varible ===> Pour obtenir le id
    const VoitureId = this.route.snapshot.paramMap.get("id");
    if (VoitureId) {
      //this.Voiture = this.ListVoitures.find((item) => item.Id === +VoitureId); => Méthode 1
      this.voiture = this.Serv.getVoitureById(VoitureId);
    }
  }
}
