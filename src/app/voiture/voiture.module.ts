import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BorderCardDirective } from "./border-card.directive";
import { CategorieVoiturePipe } from "./categorie-voiture.pipe";
import { TypeStyleDirective } from "./type-style.directive";
import { ListVoitureComponent } from "./list-voiture/list-voiture.component";
import { DetailVoitureComponent } from "./detail-voiture/detail-voiture.component";
import { HoverDetailDirective } from "./hover-detail.directive";
import { RouterModule, Routes } from "@angular/router";
import { UpdateFormComponent } from './edit-voiture/update-form/update-form.component';
import { FormsModule } from "@angular/forms";
import { EditVoitureComponent } from './edit-voiture/edit-voiture.component';

const VoitureRoutes: Routes = [
  { path: "Voitures", component: ListVoitureComponent },
  { path: "Voiture/:id", component: DetailVoitureComponent },
  { path: "Voiture/Update/:id", component: EditVoitureComponent },
];
@NgModule({
  declarations: [
    BorderCardDirective,
    CategorieVoiturePipe,
    TypeStyleDirective,
    ListVoitureComponent,
    DetailVoitureComponent,
    HoverDetailDirective,
    UpdateFormComponent,
    EditVoitureComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    // forLinker le Route
    RouterModule.forChild(VoitureRoutes),
  ],
  //providers: [VoitureService],==> Si preci le Auth
})
export class VoitureModule {}
