import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Voiture } from "../VoitureData/VoitureStructure";
import { Voitures } from "../VoitureData/VoitureInsertion";

@Component({
  selector: "app-detail-voiture",
  templateUrl: "./detail-voiture.component.html",
  styles: ``,
})
export class DetailVoitureComponent implements OnInit {
  
  ListVoitures: Voiture[];
  Voiture: Voiture | undefined;
  constructor(private route: ActivatedRoute,private router:Router) {}
  ngOnInit(): void {
    this.ListVoitures = Voitures;
    //Affecter id qui dans le URl au cette varible ===> Pour obtenir le id
    const VoitureId = this.route.snapshot.paramMap.get("id");
    if (VoitureId) {
      this.Voiture = this.ListVoitures.find((item) => item.Id === +VoitureId);
    }
  }
  RetourMethod(){
    this.router.navigate(["/Voitures"]);
  }
}
