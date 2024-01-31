import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
/*import { ListVoitureComponent } from "./voiture/list-voiture/list-voiture.component";
import { DetailVoitureComponent } from "./voiture/detail-voiture/detail-voiture.component";*/
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
const routes: Routes = [
  { path: "", redirectTo: "Voitures", pathMatch: "full" },
  // pour les Pages n'exist pas
  { path: "**", component: PageNotFoundComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
