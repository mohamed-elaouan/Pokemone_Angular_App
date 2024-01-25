import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BorderCardDirective } from "./border-card.directive";
import { CategorieVoiturePipe } from "./categorie-voiture.pipe";
import { TypeStyleDirective } from "./type-style.directive";
import { ListVoitureComponent } from "./list-voiture/list-voiture.component";
import { DetailVoitureComponent } from "./detail-voiture/detail-voiture.component";
import { HoverDetailDirective } from "./hover-detail.directive";
import { RouterModule, Routes } from "@angular/router";

const VoitureRoutes: Routes = [
  { path: "Voitures", component: ListVoitureComponent },
  { path: "Voiture/:id", component: DetailVoitureComponent },
];
@NgModule({
  declarations: [
    BorderCardDirective,
    CategorieVoiturePipe,
    TypeStyleDirective,
    ListVoitureComponent,
    DetailVoitureComponent,
    HoverDetailDirective,
  ],
  imports: [
    CommonModule,
    // forLinker le Route
    RouterModule.forChild(VoitureRoutes),
    
  ],
})
export class VoitureModule {}